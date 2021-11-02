from apps.graphql.queries.user import UserQuery
from apps.graphql.queries.product import ProductQuery
from apps.graphql.mutations.otp import OtpMutation


class Resolver:
    user_query: UserQuery = UserQuery()
    product_query: ProductQuery = ProductQuery()

    otp_mutation: OtpMutation = OtpMutation()
