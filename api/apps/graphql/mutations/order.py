
from apps.user.models import Address, User, UserDetail
from apps.order.models import Order, OrderDetail
from apps.graphql.schema.user import FieldError
from apps.graphql.schema.order import OrderStatusCode, OrderType, ShippingChoices

import strawberry


def make_order(user_id: strawberry.ID, amount: float, address_id: strawberry.ID, shipname: int = ShippingChoices.COD):
    try:
        user = User.objects.get(id=user_id)
    except:
        return FieldError(field="user id", error="user didnt exists")

    order = Order(user=user, order_status_code=OrderStatusCode.Unpaid)
    order.save()

    order_detail = OrderDetail(
        order=order, amount=amount, address=address_id, shipname=shipname)
    order_detail.save()

    return OrderType(
        id=order.id,
        user=user,
        created_at=order.created_at,
        updated_at=order.updated_at,
        status=order.order_status_code
    )
