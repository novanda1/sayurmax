from apps.user.models import User
from apps.graphql.utils import const

import jwt


def get_users():
    users = User.objects.all()
    return users


def get_user(pk: str):
    user = User.objects.get(pk=pk)
    return user


def verify_jwt(token: str):
    valid = jwt.decode(
        token,
        const.jwt_secret
    )

    if valid:
        return True
    else:
        return False
