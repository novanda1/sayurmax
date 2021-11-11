from apps.user.models import User
from utils import const
from apps.graphql.utils.authentication.default import JwtAuth, get_phone_from_jwt
from apps.graphql.services.user import UserServices


import jwt
import strawberry
from strawberry.types import Info


user_services = UserServices()


class UserQuery:
    @strawberry.field(permission_classes=[JwtAuth])
    def get_users():
        users = User.objects.all()
        return users

    @strawberry.field(permission_classes=[JwtAuth])
    def get_user(phone: str):
        user = User.objects.get(phone=phone)
        return user

    @strawberry.field(permission_classes=[JwtAuth])
    def verify_jwt(token: str):
        valid = jwt.decode(
            token,
            const.jwt_secret
        )

        if valid:
            return True
        else:
            return False

    @strawberry.field(permission_classes=[JwtAuth])
    def get_user_address(id: str):
        address = user_services.get_user_address(id)
        return address

    @strawberry.field(permission_classes=[JwtAuth])
    def get_user_addresses(self, info: Info):
        request: Request = info.context["request"]
        phone = get_phone_from_jwt(request=request)

        address = user_services.get_user_addresses(phone)
        return address
