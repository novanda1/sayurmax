import strawberry


@strawberry.type
class Cart:
    id: strawberry.ID
    total_price: int
