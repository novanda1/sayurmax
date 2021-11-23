import strawberry
from strawberry.types import Info

from gql.services.cart import CartServices
from gql.utils.authentication.default import JwtAuth, get_phone_from_jwt
from starlette.requests import Request


from asgiref.sync import sync_to_async

cart_services = CartServices()

class CartQuery:
    @strawberry.field(permission_classes=[JwtAuth])
    @sync_to_async
    def get_cart(self, info: Info):
        request: Request = info.context["request"]
        phone = get_phone_from_jwt(request)

        cart = cart_services.get_cart(phone)

        return cart
