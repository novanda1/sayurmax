import strawberry
from typing import List

from apps.graphql.queries.hello import say_hello
from apps.graphql.queries.user import get_users, get_user, verify_jwt

from apps.graphql.queries.product import products

from apps.graphql.schema.user import UserResponse, UserType
from apps.graphql.schema.product import ProductResponse

from apps.graphql.schema.cart import Cart
from apps.graphql.mutations.cart import add_to_cart, change_cart_amount, delete_cart

from apps.graphql.mutations.otp import register_otp_call, register_verif_otp, login_otp_call, login_verif_otp

from apps.graphql.schema.order import OrderType
from apps.graphql.mutations.order import make_order


@strawberry.type
class Query:
    hello: str = strawberry.field(resolver=say_hello)

    users: List[UserType] = strawberry.field(resolver=get_users)
    user: UserType = strawberry.field(resolver=get_user)
    verify_jwt: bool = strawberry.field(resolver=verify_jwt)

    products: ProductResponse = strawberry.field(resolver=products)


@strawberry.type
class Mutation:
    # register: UserResponse = strawberry.mutation(resolver=register)
    # login: UserResponse = strawberry.mutation(resolver=login)

    register_otp: str = strawberry.mutation(resolver=register_otp_call)
    register_otp_verif: UserResponse = strawberry.mutation(
        resolver=register_verif_otp)
    login_otp: str = strawberry.mutation(resolver=login_otp_call)
    login_otp_verif: UserResponse = strawberry.mutation(
        resolver=login_verif_otp)

    add_to_cart: Cart = strawberry.mutation(resolver=add_to_cart)
    change_cart_amount: Cart = strawberry.mutation(resolver=change_cart_amount)
    delete_cart: bool = strawberry.mutation(resolver=delete_cart)

    new_order: OrderType = strawberry.mutation(resolver=make_order)


schema = strawberry.Schema(query=Query, mutation=Mutation)
