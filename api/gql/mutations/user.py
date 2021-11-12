import strawberry
import uuid

from typing import Optional
from strawberry.types import Info

from gql.utils.authentication.default import JwtAuth, get_phone_from_jwt
from gql.services.user import UserServices
from gql.types.user import UserDto

user_services = UserServices()


class UserMutation:
    @strawberry.mutation(permission_classes=[JwtAuth])
    def edit_user(
        self,
        info: Info,
        options: UserDto
    ):
        user = user_services.edit_user(options)
        
        return user

    @strawberry.mutation(permission_classes=[JwtAuth])
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
        request: Request = info.context["request"]
        current_user_phone = get_phone_from_jwt(request=request)

        address = user_services.add_user_address(
            current_user_phone, phone, name, recipient, city, postal_code, address)

        return address

    @strawberry.mutation(permission_classes=[JwtAuth])
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

        request: Request = info.context["request"]
        current_user_phone = get_phone_from_jwt(request=request)

        address = user_services.edit_user_address(
            id, current_user_phone, phone=phone, name=name, recipient=recipient, city=city, postal_code=postal_code, address=address)

        return address
