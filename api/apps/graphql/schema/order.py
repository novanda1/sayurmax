import strawberry
from enum import Enum
from uuid import UUID
from typing import List

from apps.graphql.schema.user import UserType, UserAddress
from apps.graphql.schema.product import ProductType


@strawberry.enum
class OrderStatusCode(Enum):
    Progress = 0
    Completed = 1
    OnDelivery = 2
    Cancelled = 3


@strawberry.enum
class InvoiceStatusCode(Enum):
    Unpaid = 0
    Paid = 1
    Issued = 2


@strawberry.enum
class InteractionStatusCode(Enum):
    NO = 0
    YES = 1


@strawberry.type
class OrderItem:
    id: UUID
    product: ProductType
    qty: int


@strawberry.type
class Order:
    id: UUID
    status: OrderStatusCode
    address: UserAddress
    total: int
    items: List[OrderItem]
    updated_at: str
    created_at: str
