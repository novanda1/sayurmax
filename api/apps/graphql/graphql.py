import strawberry
from typing import List

from apps.graphql.queries.hello import say_hello
from apps.graphql.queries.user import get_users, get_user, verify_jwt
from apps.graphql.mutations.user import register, login
from apps.graphql.schema.user import UserType, UserResponse


@strawberry.type
class Query:
    hello: str = strawberry.field(resolver=say_hello)
    users: List[UserType] = strawberry.field(resolver=get_users)
    user: UserType = strawberry.field(resolver=get_user)
    verify_jwt: bool = strawberry.field(resolver=verify_jwt)


@strawberry.type
class Mutation:
    register: UserResponse = strawberry.mutation(resolver=register)
    login: UserResponse = strawberry.mutation(resolver=login)


schema = strawberry.Schema(query=Query, mutation=Mutation)
