
from typing import List

from apps.user.models import UserAddress, User
from apps.order.models import Order, OrderItem
from apps.grocery.models import Cart, CartProduct

from apps.graphql.schema.user import FieldError
from apps.graphql.schema.order import Order as OrderType, OrderItem as OrderItemType, OrderStatusCode


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
