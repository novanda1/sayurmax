import strawberry
from strawberry.types import Info
from starlette.requests import Request

from gql.services.order import OrderService
from gql.utils.authentication.default import JwtAuth, get_phone_from_jwt

order_services = OrderService()


class OrderQuery:
    @strawberry.field(permission_classes=[JwtAuth])
    def order(self, id: strawberry.ID):
        order = order_services.order(id)
        return order

    @strawberry.field(permission_classes=[JwtAuth])
    def orders(self, info: Info):
        request: Request = info.context['request']
        
        try: 
            phone = get_phone_from_jwt(request)
        except:
            raise Exception("phone ")

        orders = order_services.orders(phone=phone)
        return orders
