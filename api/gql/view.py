from strawberry.django.views import AsyncGraphQLView
from django.http import HttpRequest, HttpResponse
from typing import Any


class View(AsyncGraphQLView):
    async def get_context(self, request: HttpRequest, response: HttpResponse):
        return {"greeting": "hello from graphql context"}
