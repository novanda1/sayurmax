from apps.graphql.queries.user import UserQuery
from apps.graphql.queries.product import ProductQuery
from apps.graphql.mutations.otp import OtpMutation
from apps.graphql.mutations.cart import CartMutation


class Resolver:
    user_query: UserQuery = UserQuery()
    product_query: ProductQuery = ProductQuery()

    otp_mutation: OtpMutation = OtpMutation()
    cart_mutation: CartMutation = CartMutation()