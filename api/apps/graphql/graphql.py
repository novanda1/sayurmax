import strawberry
from typing import List

from apps.graphql.queries.hello import say_hello
from apps.graphql.queries.user import get_users
from apps.graphql.mutations.user import create_user
from apps.graphql.schema.user import UserType


@strawberry.type
class Query:
    hello: str = strawberry.field(resolver=say_hello)
    users: List[UserType] = strawberry.field(resolver=get_users)


@strawberry.type
class Mutation:
    create_user: UserType = strawberry.mutation(resolver=create_user)


schema = strawberry.Schema(query=Query, mutation=Mutation)
