import strawberry
import uuid
from typing import Optional, List


@strawberry.type
class UserType:
    id: uuid.UUID
    display_name: Optional[str]
    phone: str
    created_at: str
    updated_at: str


@strawberry.type
class FieldError:
    field: str
    error: str


@strawberry.type
class UserResponse:
    user: Optional[UserType]
    error: Optional[List[FieldError]]
    token: Optional[str]
