import strawberry
from enum import Enum

from apps.graphql.schema.user import UserType


@strawberry.enum
class OrderStatusCode(Enum):
    Progress = 0
    Completed = 1
    Cancelled = 2


@strawberry.enum
class ShippingChoices(Enum):
    COD = 0


@strawberry.enum
class InvoiceStatusCode(Enum):
    Unpaid = 0
    Paid = 1
    Issued = 2


@strawberry.type
class OrderType:
    id: str
    user: UserType
    status: OrderStatusCode
    updated_at: str
    created_at: str
