import strawberry

from apps.graphql.schema.product import ProductType


@strawberry.type
class Cart:
    id: strawberry.ID
    total_price: int


@strawberry.type
class CartProduct:
    amount: int
    product: ProductType
