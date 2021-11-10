
from apps.user.models import Address, User, UserDetail
from apps.order.models import Order, OrderDetail, Invoice
from apps.graphql.schema.user import FieldError
from apps.graphql.schema.order import OrderStatusCode, OrderType, InvoiceStatusCode



class OrderService:
    def create(
        self,
        address_id,
        phone
    ):
        try:
            user = User.objects.get(id=user_id)
        except:
            return FieldError(field="user id", error="user didnt exists")

        order = Order(
            user=user, order_status_code=OrderStatusCode.Progress.value)
        order.save()

        order_detail = OrderDetail(
            order=order, amount=amount, address=address_id, shipName=shipname.value)
        order_detail.save()

        invoice = Invoice(
            order=order, invoice_status_code=InvoiceStatusCode.Unpaid.value)
        invoice.save()

        return OrderType(
            id=order.id,
            user=user,
            created_at=order.created_at,
            updated_at=order.updated_at,
            status=order.order_status_code
        )
