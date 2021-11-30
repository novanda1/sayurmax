import factory
from faker import Faker
import random

from apps.grocery.models import Cart, CartProduct
from apps.order.models import Order, OrderItem
from apps.user.models import UserAddress


def create():
    carts = Cart.objects.all()

    for c in carts:
        address = UserAddress.objects.filter(user=c.user)

        if len(address):
            order = Order(
                user=c.user, order_status_code=0,
                address=address[random.randrange(len(address))],
                invoice_status_code=0)
            order.save()

            items = CartProduct.objects.filter(cart=c)

            for item in items:
                if item.product:
                    order_item = OrderItem(
                        order=order,
                        product=item.product,
                        qty=random.randint(1, 5))
                    order_item.save()
                else:
                    pass
