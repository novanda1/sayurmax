import typing
import jwt

from django.contrib.sessions.models import Session
from starlette.requests import Request
from starlette.websockets import WebSocket
from strawberry.permission import BasePermission
from strawberry.types import Info

from utils import const


def authenticate_header(request: Request):
    auth = request.headers.get('Authorization')
    token = auth.split()[1]

    valid = jwt.decode(token, const.jwt_secret, algorithms=["HS256"])

    if valid:
        return True
    else:
        return False


class SessionAuth(BasePermission):
    message = "User is not authenticated"

    def has_permission(self, source: typing.Any, info: Info, **kwargs) -> bool:
        request: typing.Union[Request, WebSocket] = info.context["request"]

        if request.session['userid']:
            return True

        return False
