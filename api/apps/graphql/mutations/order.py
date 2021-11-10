from strawberry import mutation
from strawberry.types import Info
from uuid import UUID
from starlette.requests import Request

from apps.graphql.utils.authentication.default import JwtAuth, get_phone_from_jwt
from apps.graphql.services.order import OrderService

order_service = OrderService()


class OrderMutation:
    @mutation(permission_classes=[JwtAuth])
    def make_order(self, info: Info, address_id: UUID):
        request: Request = info.context["request"]
        phone = get_phone_from_jwt(request=request)

        result = order_service.create(address_id, phone)

        return result
