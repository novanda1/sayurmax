from apps.user.models import User
import jwt


from dotenv import load_dotenv, dotenv_values
import os

config = {
    **dotenv_values(".env.dev"),
    **os.environ,
}

load_dotenv()


def get_users():
    users = User.objects.all()
    return users


def get_user(pk: str):
    user = User.objects.get(pk=pk)
    return user


def verify_jwt(token: str):
    valid = jwt.decode(
        token,
        config['JWT_SECRET']
    )

    if valid:
        return True
    else:
        return False
