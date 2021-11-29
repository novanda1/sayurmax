import strawberry
from strawberry.types import Info
from starlette.requests import Request
from typing import Optional

from gql.services.order import OrderService
from gql.utils.authentication.default import JwtAuth
from gql.types.order import OrderStatusCode, Order as OrderType, OrderDate
from apps.order.models import Order


from asgiref.sync import sync_to_async

order_services = OrderService()


class OrderQuery:
    @strawberry.field(permission_classes=[JwtAuth])
    async def order(self, info: Info, id: strawberry.ID):
        order = await info.context["order_loader"].load(id)
        user = await info.context["user_loader"].load(order.user.id)
        items = await info.context["orderitems_loader"].load(id)

        result = await order_services.order(
            order, user, items, product_loader=info.context["product_loader"])
        return result

    @strawberry.field(permission_classes=[JwtAuth])
    @sync_to_async
    def orders(
        self,
        info: Info,
        status: OrderStatusCode,
        limit: int,
        after: Optional[str] = None,
        date: Optional[OrderDate] = None
    ):
        orders = order_services.orders(status, limit, after, date)
        return orders
