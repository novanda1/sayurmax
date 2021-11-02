from apps.graphql.mutations.otp import OtpMutationResolver


class Resolver:
    otp_mutation: OtpMutationResolver = OtpMutationResolver()
