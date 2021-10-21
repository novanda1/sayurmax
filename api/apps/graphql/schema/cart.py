import strawberry


@strawberry.type
class Cart:
    id: strawberry.ID
    user_id: strawberry.ID
    product_id: strawberry.ID
    amount: int
