from strawberry import mutation
from strawberry.types import Info
from uuid import UUID
from starlette.requests import Request

from apps.graphql.utils.authentication.default import JwtAuth, get_phone_from_jwt
from apps.graphql.services.order import OrderService
from apps.graphql.utils.whatsapp import Whatsapp
from apps.graphql.utils.rupiah import rupiah_format

order_service = OrderService()
wa = Whatsapp()


class OrderMutation:
    @mutation(permission_classes=[JwtAuth])
    def make_order(self, info: Info, address_id: UUID):
        request: Request = info.context["request"]
        phone = get_phone_from_jwt(request=request)

        order = order_service.create(address_id, phone)

        if order:
            order_items = ""

            for index, p in enumerate(order.items):
                item = "%s. (%s %s) %s : %s \n" % (
                    index+1, p.qty, p.product.item_unit, p.product.title, rupiah_format(p.at_price, True))
                order_items += item

            order_items += "\ntotal: %s" % (rupiah_format(order.total, True),)

            wa.send(phone, wa.order_message % (phone, order_items))

        return order
