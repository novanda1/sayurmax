import strawberry

from typing import Optional


@strawberry.type
class Shopper:
    username: str
    first_name: Optional[str]
    last_name: Optional[str]
    email: Optional[str]


@strawberry.type
class ShopperAuthResponse:
    shopper: Shopper
    token: str
