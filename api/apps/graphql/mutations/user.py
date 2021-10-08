import strawberry
from typing import Optional
from argon2 import PasswordHasher

from apps.user.models import User


@strawberry.input
class UserDto:
    email: Optional[str] = strawberry.field(description="add unique email")
    username: str
    display_name: str
    phone: Optional[str]
    password: str


def register(options: UserDto):
    ph = PasswordHasher()
    password = ph.hash(options.password)

    user = User(
        email=options.email,
        display_name=options.display_name,
        username=options.username,
        phone=options.phone,
        password=password
    )

    try:
        user.save()
    except:
        pass

    return user
