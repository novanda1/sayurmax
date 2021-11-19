from gql.queries.user import UserQuery
from gql.mutations.user import UserMutation
from gql.queries.product import ProductQuery
from gql.mutations.otp import OtpMutation
from gql.mutations.cart import CartMutation
from gql.queries.cart import CartQuery
from gql.mutations.order import OrderMutation
from gql.queries.order import OrderQuery
from gql.mutations.shopper import ShopperMutation


class Resolver:
    user_query: UserQuery = UserQuery()
    product_query: ProductQuery = ProductQuery()
    cart_query: CartQuery = CartQuery()
    order_query: OrderQuery = OrderQuery()

    user_mutation: UserMutation = UserMutation()
    otp_mutation: OtpMutation = OtpMutation()
    cart_mutation: CartMutation = CartMutation()
    order_mutation: OrderMutation = OrderMutation()
    shopper_mutation: ShopperMutation = ShopperMutation()
