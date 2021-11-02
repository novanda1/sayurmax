import strawberry
from typing import List

from apps.graphql.queries.hello import say_hello
from apps.graphql.schema.user import UserResponse, UserType
from apps.graphql.schema.product import ProductResponse
from apps.graphql.schema.cart import Cart
from apps.graphql.schema.order import OrderType


from apps.graphql.resolver import Resolver

resolver = Resolver()


@strawberry.type
class Query:
    hello: str = strawberry.field(resolver=say_hello)

    # users: List[UserType] = strawberry.field(resolver=get_users)
    # user: UserType = strawberry.field(resolver=get_user)
    # verify_jwt: bool = strawberry.field(resolver=verify_jwt)

    # products: ProductResponse = strawberry.field(resolver=products)


@strawberry.type
class Mutation:
    # otp start
    register_otp: str = resolver.otp_mutation.register_otp_call
    register_otp_verif: UserResponse = resolver.otp_mutation.register_verif_otp
    login_otp: str = resolver.otp_mutation.login_otp_call
    login_otp_verif: UserResponse = resolver.otp_mutation.login_verif_otp
    # otp end


schema = strawberry.Schema(query=Query, mutation=Mutation)
