from apps.order.models import Order
from typing import List


async def load_orders(keys) -> List[Order]:
    return [Order.objects.filter(pk=key) for key in keys]
