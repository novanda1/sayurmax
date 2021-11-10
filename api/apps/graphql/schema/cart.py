import strawberry
from enum import Enum
from uuid import UUID
from typing import List, Optional

from apps.graphql.schema.product import ProductType


@strawberry.type
class CartProduct:
    id: UUID
    amount: int
    product: ProductType


@strawberry.type
class Cart:
    id: strawberry.ID
    total_price: int
    cart_product: Optional[List[CartProduct]]


@strawberry.enum
class TypeOfProduct(Enum):
    PRODUCT = "PRODUCT"
    CART_PRODUCT = "CART_PRODUCT"
