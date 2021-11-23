from apps.grocery.models import Product
from apps.order.models import Order, OrderItem
from apps.user.models import User, UserAddress

from typing import List


async def load_orders(keys) -> List[Order]:
    return [Order.objects.get(pk=key) for key in keys]


async def load_users(keys) -> List[User]:
    return [User.objects.get(pk=key) for key in keys]


async def load_address(keys) -> List[UserAddress]:
    return [UserAddress.objects.get(pk=key) for key in keys]


async def load_orderitems(keys) -> List[OrderItem]:
    return [OrderItem.objects.filter(order__id=key) for key in keys]


async def load_products(keys) -> List[Product]:
    return [Product.objects.get(pk=key) for key in keys]
