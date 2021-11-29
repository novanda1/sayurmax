import datetime
from typing import List

from django.contrib.postgres.search import SearchVector

from apps.user.models import UserAddress, User
from apps.order.models import Order, OrderItem
from apps.grocery.models import Cart, CartProduct, Product

from gql.types.user import FieldError, UserAddress as UserAddressType
from gql.types.order import Order as OrderType, OrderItem as OrderItemType, OrderStatusCode, OrderItem as OrderItemType
from gql.types.product import ProductType

from cursor_pagination import CursorPaginator


from asgiref.sync import sync_to_async


class OrderService:
    def create(
        self,
        address_id,
        userid
    ):
        try:
            user = User.objects.get(pk=userid)
        except:
            raise Exception("user not found")

        try:
            address = UserAddress.objects.get(id=address_id)
        except:
            raise Exception("address not found")

        try:
            cart = Cart.objects.get(user=user)
        except:
            raise Exception("cart not found")

        try:
            cart_product = CartProduct.objects.filter(cart=cart) or []

            # if there is no cart items
            if not cart_product:
                raise Exception("please add some product to cart")
        except:
            pass

        try:
            order = Order(
                user=user,
                address=address,
                order_status_code=OrderStatusCode.Progress.value,
                total=0
            )
            order.save()
        except:
            raise Exception("failed add order")

        order_items = []
        total = 0

        for c in cart_product:
            order_item = OrderItem(
                order=order,
                product_id=c.product.id,
                at_price=c.product.dicount_price or c.product.normal_price,
                qty=c.amount
            )

            order_item.save()

            new_item = OrderItemType(
                id=order_item.id,
                product=c.product,
                qty=order_item.qty,
                at_price=order_item.at_price
            )

            order_items.append(new_item)

            coming_price = new_item.qty * \
                c.product.dicount_price or c.product.normal_price

            total += coming_price

        order.total = total

        try:
            order.save()
        except:
            raise Exception("failed to make order")

        try:
            result = OrderType(
                id=order.id,
                status=OrderStatusCode.Progress.value,
                address=order.address,
                total=order.total,
                items=order_items,
                updated_at=order.updated_at,
                created_at=order.created_at
            )
        except:
            raise Exception("failed to make order")

        cart.delete()

        return result

    async def order(self, order: Order, user, items, product_loader):
        order_items = list()
        for o in items:
            order_item_product = await product_loader.load(o.product.id)

            product = ProductType(
                order_item_product.id,
                order_item_product.title,
                order_item_product.slug,
                # the reason to not use "order_item_product" directly is just for changing this categories
                # @todo make it better
                order_item_product.categories.all(),
                order_item_product.image_url,
                order_item_product.normal_price,
                order_item_product.dicount_price,
                order_item_product.item_unit,
                order_item_product.information,
                order_item_product.nutrition,
                order_item_product.how_to_keep,
            )

            items = OrderItemType(
                id=o.id,
                product=product,
                qty=o.qty,
                at_price=o.at_price
            )

            order_items.append(items)

        order_type = OrderType(
            id=order.id,
            user=user,
            status=order.order_status_code,
            address=order.address,
            total=order.total,
            items=order_items,
            created_at=order.created_at,
            updated_at=order.updated_at
        )

        return order_type

    def orders(self, status, limit, after, date, search):
        qs = Order.objects.filter(
            order_status_code=status.value)

        if search:
            qs = qs.annotate(search=SearchVector(
                'user__display_name') + SearchVector('user__phone')).filter(search=search)
        else:
            pass

        if date:
            qs = qs.filter(created_at__date=datetime.date(
                date.year, date.month, date.day))
        else:
            pass

        paginator = CursorPaginator(qs, ordering=('-created_at', '-id'))
        page = paginator.page(first=limit, after=after)

        class Data:
            def __init__(self, result, has_next, next_cursor):
                real_next_cursor = next_cursor if has_next else ""

                order_items = list()
                for order in result:
                    for o in OrderItem.objects.filter(order__id=order.id):
                        order_item_product = Product.objects.get(
                            id=o.product_id)
                    product = ProductType(
                        order_item_product.id,
                        order_item_product.title,
                        order_item_product.slug,
                        # the reason to not use "order_item_product" directly is just for changing this categories
                        # @todo make it better
                        order_item_product.categories.all(),
                        order_item_product.image_url,
                        order_item_product.normal_price,
                        order_item_product.dicount_price,
                        order_item_product.item_unit,
                        order_item_product.information,
                        order_item_product.nutrition,
                        order_item_product.how_to_keep,
                    )

                    items = OrderItemType(
                        id=o.id,
                        product=product,
                        qty=o.qty,
                        at_price=o.at_price
                    )

                    order_items.append(items)

                self.has_next = has_next
                self.next_cursor = real_next_cursor
                self.result = [OrderType(
                    id=order.id,
                    user=order.user,
                    status=order.order_status_code,
                    address=order.address,
                    total=order.total,
                    items=order_items,
                    created_at=order.created_at,
                    updated_at=order.updated_at
                ) for order in result]

        return Data([p for p in page], page.has_next, paginator.cursor(page[-1]))
