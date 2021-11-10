import strawberry
from strawberry.types import Info

from apps.graphql.services.cart import CartServices
from apps.graphql.utils.authentication.default import JwtAuth, get_phone_from_jwt
from starlette.requests import Request


cart_services = CartServices()

class CartQuery:
    @strawberry.field(permission_classes=[JwtAuth])
    def get_cart(self, info: Info):
        request: Request = info.context["request"]
        phone = get_phone_from_jwt(request)

        cart = cart_services.get_cart(phone)

        return cart
