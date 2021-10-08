import strawberry
from typing import Optional
from apps.user.models import User


@strawberry.input
class UserDto:
    email: Optional[str] = strawberry.field(description="add unique email")
    username: str
    display_name: str
    phone: Optional[str]

    # def __init__(
    #     self,
    #     email: Optional[str],
    #     username: str,
    #     display_name: str,
    #     phone: Optional[str],
    # ):
    #     self.email = email
    #     self.username = username
    #     self.display_name = display_name
    #     self.phone = phone


def create_user(options: UserDto):
    user = User(
        email=options.email,
        display_name=options.display_name,
        username=options.username,
        phone=options.phone
    )

    user.save()
    return user
