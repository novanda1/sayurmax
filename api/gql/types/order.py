import strawberry
from enum import Enum
from uuid import UUID
from typing import List, Optional

from gql.types.user import UserType, UserAddress
from gql.types.product import ProductType


@strawberry.input
class OrderDate:
    year: int
    month: int
    day: int

@strawberry.enum
class OrderStatusCode(Enum):
    Unverified = 0
    Progress = 1
    OnDelivery = 2
    Completed = 3
    Cancelled = 4


@strawberry.enum
class InvoiceStatusCode(Enum):
    Unpaid = 0
    Paid = 1
    Issued = 2


@strawberry.type
class OrderItem:
    id: UUID
    product: ProductType
    qty: int
    at_price: int


@strawberry.type
class Order:
    id: strawberry.ID
    user: UserType
    status: OrderStatusCode
    address: UserAddress
    total: int
    items: List[OrderItem]
    updated_at: str
    created_at: str


@strawberry.type
class OrderResponse:
    result: List[Order]
    has_next: bool
    next_cursor: Optional[str]
