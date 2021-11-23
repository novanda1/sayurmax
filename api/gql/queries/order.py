import strawberry
from strawberry.types import Info
from starlette.requests import Request

from gql.services.order import OrderService
from gql.utils.authentication.default import JwtAuth, get_phone_from_jwt
from gql.types.order import OrderStatusCode

from asgiref.sync import sync_to_async

order_services = OrderService()


class OrderQuery:
    @strawberry.field(permission_classes=[JwtAuth])
    @sync_to_async
    def order(self, id: strawberry.ID):
        order = order_services.order(id)
        return order

    @strawberry.field(permission_classes=[JwtAuth])
    @sync_to_async
    def orders(self, info: Info, status: OrderStatusCode):
        orders = order_services.orders(status=status)
        return orders
