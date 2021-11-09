import strawberry
import uuid
from strawberry.types import Info

from apps.grocery.models import Cart, Product
from apps.user.models import User
from apps.graphql.services.cart import CartServices
from apps.graphql.utils.authentication.default import JwtAuth, get_phone_from_jwt
from apps.graphql.schema.cart import TypeOfProduct


cart_services = CartServices()


class CartMutation:
    @strawberry.mutation(permission_classes=[JwtAuth])
    def add_to_cart(self, info: Info, product_id: str, amount: int):
        request: Request = info.context["request"]
        phone = get_phone_from_jwt(request=request)

        cart = cart_services.add_to_cart(
            phone=phone, productid=product_id, amount=amount)

        return cart

    @strawberry.mutation(permission_classes=[JwtAuth])
    def edit_cart_product(product_id: str, amount: int, product_type: TypeOfProduct):
        product_edited = cart_services.edit_product_amount(
            product_id, amount, product_type)
        return product_edited

    @strawberry.mutation(permission_classes=[JwtAuth])
    def delete_cart_product(self, info: Info, id: uuid.UUID):
        cart_deleted = cart_services.delete_cart_product(id)

        return cart_deleted
