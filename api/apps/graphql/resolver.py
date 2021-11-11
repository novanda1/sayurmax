from apps.graphql.queries.user import UserQuery
from apps.graphql.mutations.user import UserMutation
from apps.graphql.queries.product import ProductQuery
from apps.graphql.mutations.otp import OtpMutation
from apps.graphql.mutations.cart import CartMutation
from apps.graphql.queries.cart import CartQuery
from apps.graphql.mutations.order import OrderMutation
from apps.graphql.queries.order import OrderQuery


class Resolver:
    user_query: UserQuery = UserQuery()
    product_query: ProductQuery = ProductQuery()
    cart_query: CartQuery = CartQuery()
    order_query: OrderQuery = OrderQuery()

    user_mutation: UserMutation = UserMutation()
    otp_mutation: OtpMutation = OtpMutation()
    cart_mutation: CartMutation = CartMutation()
    order_mutation: OrderMutation = OrderMutation()
