import strawberry
from enum import Enum
from uuid import UUID
from typing import List

from gql.types.user import UserType, UserAddress
from gql.types.product import ProductType


@strawberry.enum
class OrderStatusCode(Enum):
    Unverified = 0
    Progress = 1
    Completed = 2
    OnDelivery = 3
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
