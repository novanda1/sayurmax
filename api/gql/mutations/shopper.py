from strawberry import mutation
from gql.services.shopper import ShopperServices

services = ShopperServices()


class ShopperMutation:
    @mutation
    def login(self, phone: str, password: str):
        token = services.login(phone, password)
        return token
