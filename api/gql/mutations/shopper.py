from strawberry import mutation
from gql.services.shopper import ShopperServices
from gql.utils.authentication.shopper import ShopperAuth
from gql.types.order import OrderStatusCode

services = ShopperServices()


class ShopperMutation:
    @mutation
    def login(self, username: str, password: str):

        token = services.login(username, password)
        return token

    @mutation(permission_classes=[ShopperAuth])
    def change_order_status(self, id: str, status: OrderStatusCode):
        order_status_code = services.change_order_status(id, status)
        return order_status_code
