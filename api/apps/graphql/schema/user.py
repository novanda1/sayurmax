import strawberry
from typing import Optional


@strawberry.type
class UserType:
    id: int
    email: Optional[str]
    username: str
    display_name: str
    phone: Optional[str]
    created_at: str
    updated_at: str
