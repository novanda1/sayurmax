import strawberry


@strawberry.type
class Shopper:
    phone: str
    display_name: str


@strawberry.type
class ShopperAuthResponse:
    shopper: Shopper
    token: str
