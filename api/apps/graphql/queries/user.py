from apps.user.models import User
from apps.graphql.utils import const

import jwt
import strawberry


class UserQuery:
    @strawberry.field
    def get_users():
        users = User.objects.all()
        return users

    @strawberry.field
    def get_user(phone: str):
        user = User.objects.get(phone=phone)
        return user

    @strawberry.field
    def verify_jwt(token: str):
        valid = jwt.decode(
            token,
            const.jwt_secret
        )

        if valid:
            return True
        else:
            return False
