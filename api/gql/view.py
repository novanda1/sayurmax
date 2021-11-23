import jwt

from strawberry.django.views import AsyncGraphQLView
from django.http import HttpRequest, HttpResponse
from starlette.requests import Request

from typing import Any
from utils import const


def get_userid(request: Request):
    auth = request.headers.get('Authorization')
    if auth:
        token = auth.split()[1]
        payload = jwt.decode(token, const.jwt_secret, algorithms=["HS256"])
        return payload['sub'] if payload else None
    else:
        return None

class View(AsyncGraphQLView):
    async def get_context(self, request: HttpRequest, response: HttpResponse):
        return {
            "request": request,
            "response": response,
            "userid": get_userid(request),
            "greeting": "hello from graphql context",
        }
