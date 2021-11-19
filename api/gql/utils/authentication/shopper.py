import typing

from starlette.requests import Request
from starlette.websockets import WebSocket
from strawberry.permission import BasePermission
from strawberry.types import Info

from utils import const


def authenticate_header(request: Request):
    auth = request.headers.get('x-shopper-secret')

    valid = auth == const.auth

    if valid:
        return True
    else:
        return False


class ShopperAuth:
    message = "User is not authenticated"

    def has_permission(self, source: typing.Any, info: Info, **kwargs) -> bool:
        request: typing.Union[Request, WebSocket] = info.context["request"]

        if "Authorization" in request.headers:
            return authenticate_header(request)

        return False
