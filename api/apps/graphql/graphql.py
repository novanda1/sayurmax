import strawberry
from typing import List

from apps.graphql.queries.hello import say_hello
from apps.graphql.schema.user import UserResponse, UserType, UserAddress
from apps.graphql.schema.product import ProductResponse, ProductType
from apps.graphql.schema.cart import Cart
from apps.graphql.schema.order import OrderType


from apps.graphql.resolver import Resolver

resolver = Resolver()


@strawberry.type
class Query:
    hello: str = strawberry.field(resolver=say_hello)

    users: List[UserType] = resolver.user_query.get_users
    user: UserType = resolver.user_query.get_user
    verify_jwt: bool = resolver.user_query.verify_jwt
    user_get_address: UserAddress = resolver.user_query.get_user_address
    user_get_addresses: List[UserAddress] = resolver.user_query.get_user_addresses

    products: ProductResponse = resolver.product_query.products
    product: ProductType = resolver.product_query.product


@strawberry.type
class Mutation:
    auth_call: str = resolver.otp_mutation.auth_call
    auth_verif: UserResponse = resolver.otp_mutation.auth_verif

    add_to_cart: Cart = resolver.cart_mutation.add_to_cart

    user_add_address: UserAddress = resolver.user_mutation.add_user_address
    user_edit_address: UserAddress = resolver.user_mutation.edit_user_address


schema = strawberry.Schema(query=Query, mutation=Mutation)
