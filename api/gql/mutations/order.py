from strawberry import mutation
from strawberry.types import Info
from uuid import UUID
from starlette.requests import Request

from gql.utils.authentication.default import JwtAuth, get_phone_from_jwt
from gql.services.order import OrderService
from utils.whatsapp import Whatsapp
from utils.rupiah import rupiah_format

from asgiref.sync import sync_to_async

order_service = OrderService()
wa = Whatsapp()


class OrderMutation:
    @mutation(permission_classes=[JwtAuth])
    @sync_to_async
    def make_order(self, info: Info, address_id: UUID):
        request: Request = info.context["request"]
        phone = get_phone_from_jwt(request=request)

        order = order_service.create(address_id, phone)

        if order:
            order_items = ""

            for index, p in enumerate(order.items):
                item = wa.order_item_message % (
                    index+1, p.qty, p.product.item_unit, p.product.title, rupiah_format(p.at_price * p.qty, True))
                order_items += item

            wa.send(phone, wa.order_message %
                    (phone, order_items, rupiah_format(order.total, True)))

        return order
