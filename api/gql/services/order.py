
from typing import List

from apps.user.models import UserAddress, User
from apps.order.models import Order, OrderItem
from apps.grocery.models import Cart, CartProduct

from gql.types.user import FieldError
from gql.types.order import Order as OrderType, OrderItem as OrderItemType, OrderStatusCode


class OrderService:
    def create(
        self,
        address_id,
        phone
    ):
        try:
            user = User.objects.get(phone=phone)
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

    def order(self, id):
        try:
            order = Order.objects.get(id=id)
        except:
            raise Exception("not found")

        order_items = OrderItem.objects.filter(order=order)
        address = UserAddress(
            id=order.address.id,
            name=order.address.name,
            recipient=order.address.recipient,
            phone=order.address.phone,
            city=order.address.city,
            postal_code=order.address.postal_code,
            address=order.address.address
        ),

        order_type = OrderType(
            id=order.id,
            status=OrderStatusCode[order.order_status_code],
            address=address,
            total=order.total,
            items=order_items,
            created_at=order.created_at,
            updated_at=order.updated_at
        )

    def orders(self, phone):
        try:
            user = User.objects.get(phone=phone)
        except:
            raise Exception("cant find user")

        orders = Order.objects.filter(user=user)

        orders_arr = []

        for order in orders:
            address = UserAddress(
                id=order.address.id,
                name=order.address.name,
                recipient=order.address.recipient,
                phone=order.address.phone,
                city=order.address.city,
                postal_code=order.address.postal_code,
                address=order.address.address
            ),

            order_type = OrderType(
                id=order.id,
                status=OrderStatusCode[order.order_status_code],
                address=address,
                total=order.total,
                items=order_items,
                created_at=order.created_at,
                updated_at=order.updated_at
            )

            orders_arr.append(order_type)

        return orders_arr
