import strawberry

from apps.graphql.queries.hello import say_hello


@strawberry.type
class Query:
    hello: str = strawberry.field(resolver=say_hello)


schema = strawberry.Schema(query=Query)
