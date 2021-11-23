import strawberry
from strawberry.types import Info

from gql.services.cart import CartServices
from gql.utils.authentication.default import JwtAuth


from asgiref.sync import sync_to_async

cart_services = CartServices()


class CartQuery:
    @strawberry.field(permission_classes=[JwtAuth])
    @sync_to_async
    def get_cart(self, info: Info):
        userid = info.context["userid"]
        cart = cart_services.get_cart(userid=userid)

        return cart
