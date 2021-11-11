import strawberry
from typing import List, Optional

from apps.graphql.queries.hello import say_hello
from apps.graphql.schema.user import UserResponse, UserType, UserAddress
from apps.graphql.schema.product import ProductResponse, ProductType
from apps.graphql.schema.cart import Cart, CartProduct
from apps.graphql.schema.order import Order


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

    cart: Cart = resolver.cart_query.get_cart

    order: Order = resolver.order_query.order
    orders: Order = resolver.order_query.orders


@strawberry.type
class Mutation:
    auth_call: str = resolver.otp_mutation.auth_call
    auth_verif: UserResponse = resolver.otp_mutation.auth_verif

    add_to_cart: CartProduct = resolver.cart_mutation.add_to_cart
    edit_cart_product_amount: CartProduct = resolver.cart_mutation.edit_cart_product

    user_edit: UserType = resolver.user_mutation.edit_user
    user_add_address: UserAddress = resolver.user_mutation.add_user_address
    user_edit_address: UserAddress = resolver.user_mutation.edit_user_address

    make_order: Order = resolver.order_mutation.make_order


schema = strawberry.Schema(query=Query, mutation=Mutation)
