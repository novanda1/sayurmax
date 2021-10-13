from apps.user.models import User
import jwt


def get_users():
    users = User.objects.all()
    return users


def get_user(pk: int):
    user = User.objects.get(pk=pk)
    return user


def verify_jwt(token: str):
    valid = jwt.decode(
        token,
        os.getenv("JWT_SECRET")
    )

    if valid:
        return True
    else:
        return False
