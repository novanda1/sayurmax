from strawberry import mutation
from gql.services.shopper import ShopperServices

services = ShopperServices()


class ShopperMutation:
    @mutation
    def login(self, username: str, password: str):

        token = services.login(username, password)
        return token
