import strawberry
from strawberry.types import Info

from apps.grocery.models import Cart, Product
from apps.user.models import User

from apps.graphql.services.cart import CartServices

from apps.graphql.utils.authentication.session import SessionAuth


class CartMutation:
    cart_services = CartServices()

    @strawberry.mutation(permission_classes=[SessionAuth])
    def add_to_cart(self, info: Info, product_id: str, amount: int):
        request: typing.Union[Request, WebSocket] = info.context["request"]

        try:
            userid = request.session['userid']
        except:
            raise Exception("not authenticated")

        try:
            cart = self.cart_services.add_to_cart(
                userid=userid, productid=product_id, amount=amount)
        except:
            raise Exception("add to cart service: failed")

        return cart
