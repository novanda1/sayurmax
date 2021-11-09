import strawberry
from enum import Enum
from uuid import UUID

from apps.graphql.schema.product import ProductType


@strawberry.type
class Cart:
    id: strawberry.ID
    total_price: int


@strawberry.type
class CartProduct:
    id: UUID
    amount: int
    cart: Cart
    product: ProductType


@strawberry.enum
class TypeOfProduct(Enum):
    PRODUCT = "PRODUCT"
    CART_PRODUCT = "CART_PRODUCT"
