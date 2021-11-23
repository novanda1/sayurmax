from strawberry.django.views import AsyncGraphQLView
from django.http import HttpRequest, HttpResponse
from typing import Any


class View(AsyncGraphQLView):
    async def get_context(self, request: HttpRequest, response: HttpResponse):
        return {
            "request": request,
            "response": response,
            "greeting": "hello from graphql context",
        }
