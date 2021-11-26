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
    
@strawberry.input
class UserDto:
    display_name: Optional[str]
    phone: Optional[str]


@strawberry.type
class FieldError:
    field: str
    error: str


@strawberry.type
class UserResponse:
    user: Optional[UserType]
    error: Optional[List[FieldError]]
    token: Optional[str]


@strawberry.type
class UserAddress:
    id: uuid.UUID
    name: str
    recipient: str
    phone: str
    city: str
    postal_code: int
    address: str
    detail: str
    
