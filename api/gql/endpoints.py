from typing import List
from strawberry.asgi import GraphQL
from gql.schema import schema

graphql_app = GraphQL(schema)
