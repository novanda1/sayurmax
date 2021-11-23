import strawberry
import uuid

from typing import Optional
from strawberry.types import Info

from gql.utils.authentication.default import JwtAuth
from gql.services.user import UserServices
from gql.types.user import UserDto

from asgiref.sync import sync_to_async

user_services = UserServices()


class UserMutation:
    @strawberry.mutation(permission_classes=[JwtAuth])
    @sync_to_async
    def edit_user(
        self,
        info: Info,
        options: UserDto
    ):
        user = user_services.edit_user(options)

        return user

    @strawberry.mutation(permission_classes=[JwtAuth])
    @sync_to_async
    def add_user_address(
        self,
        info: Info,
        name: str,
        recipient: str,
        phone: str,
        city: str,
        postal_code: str,
        address: str
    ):
        userid = info.context["userid"]

        address = user_services.add_user_address(
            userid, phone, name, recipient, city, postal_code, address)

        return address

    @strawberry.mutation(permission_classes=[JwtAuth])
    @sync_to_async
    def edit_user_address(
        self,
        info: Info,
        id: uuid.UUID,
        name: Optional[str],
        recipient: Optional[str],
        phone: Optional[str],
        city: Optional[str],
        postal_code: Optional[str],
        address: Optional[str]
    ):

        userid = info.context["userid"]

        address = user_services.edit_user_address(
            id, userid=userid, phone=phone, name=name, recipient=recipient, city=city, postal_code=postal_code, address=address)

        return address
