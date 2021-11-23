from strawberry import mutation
from gql.services.shopper import ShopperServices
from gql.utils.authentication.shopper import ShopperAuth
from gql.types.order import OrderStatusCode

from asgiref.sync import sync_to_async

services = ShopperServices()


class ShopperMutation:
    @mutation
    @sync_to_async
    def login(self, username: str, password: str):

        token = services.login(username, password)
        return token

    @mutation(permission_classes=[ShopperAuth])
    @sync_to_async
    def change_order_status(self, id: str, status: OrderStatusCode):
        order_status_code = services.change_order_status(id, status)
        return order_status_code
