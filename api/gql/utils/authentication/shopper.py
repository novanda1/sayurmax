import typing
import jwt

from django.contrib.auth.models import User

from starlette.requests import Request
from starlette.websockets import WebSocket
from strawberry.permission import BasePermission
from strawberry.types import Info

from utils import const


def authenticate_shopper(request: Request):
    auth = request.headers.get('Authorization')
    token = auth.split()[1]

    payload = jwt.decode(token, const.jwt_secret, algorithms=["HS256"])

    if payload:
        username = payload["username"]

        try:
            shopper = User.objects.get(username=username)
        except:
            return False

        return True
    else:
        return False


class ShopperAuth(BasePermission):
    message = "Shopper is not authenticated"

    def has_permission(self, source: typing.Any, info: Info, **kwargs) -> bool:
        request: typing.Union[Request, WebSocket] = info.context["request"]

        if "Authorization" in request.headers:
            return authenticate_shopper(request)

        return False
