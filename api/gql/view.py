import jwt

from strawberry.django.views import AsyncGraphQLView
from strawberry.dataloader import DataLoader
from django.http import HttpRequest, HttpResponse
from starlette.requests import Request

from typing import Any
from utils import const

from gql.loaders import load_orders, load_users, load_orderitems, load_products


def get_userid(request: Request):
    auth = request.headers.get('Authorization')
    if auth:
        token = auth.split()[1]
        try:
            payload = jwt.decode(token, const.jwt_secret, algorithms=["HS256"])
        except:
            pass

        return payload['sub'] if payload else None
    else:
        return None


class View(AsyncGraphQLView):
    async def get_context(self, request: HttpRequest, response: HttpResponse):
        return {
            "request": request,
            "response": response,
            "userid": get_userid(request),
            "order_loader": DataLoader(load_fn=load_orders),
            "user_loader": DataLoader(load_fn=load_users),
            "orderitems_loader": DataLoader(load_fn=load_orderitems),
            "product_loader": DataLoader(load_fn=load_products),
            "greeting": "hello from graphql context",
        }
