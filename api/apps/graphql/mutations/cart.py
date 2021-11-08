import strawberry
import uuid
from strawberry.types import Info

from apps.grocery.models import Cart, Product
from apps.user.models import User

from apps.graphql.services.cart import CartServices

from apps.graphql.utils.authentication.default import JwtAuth


cart_services = CartServices()


class CartMutation:
    @strawberry.mutation(permission_classes=[JwtAuth])
    def add_to_cart(self, info: Info, product_id: str, amount: int):
        cart = cart_services.add_to_cart(
            phone=phone, productid=product_id, amount=amount)

        return cart

    @strawberry.mutation(permission_classes=[JwtAuth])
    def edit_cart_product(product_id: str, amount: int):
        product_edited = cart_services.edit_product_amount(amount)
        return product_edited

    @strawberry.mutation(permission_classes=[JwtAuth])
    def delete_cart_product(self, info: Info, id: uuid.UUID):
        cart_deleted = cart_services.delete_cart_product(id)

        return cart_deleted
