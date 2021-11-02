from apps.graphql.mutations.otp import OtpMutation
from apps.graphql.queries.user import UserQuery


class Resolver:
    user_query: UserQuery = UserQuery()

    otp_mutation: OtpMutation = OtpMutation()
