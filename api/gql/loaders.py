from apps.order.models import Order
from typing import List


async def load_orders(keys) -> List[Order]:
    return [Order.objects.get(pk=key) for key in keys]
