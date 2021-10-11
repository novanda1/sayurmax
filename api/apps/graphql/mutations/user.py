import strawberry
from typing import Optional
from argon2 import PasswordHasher
from phonenumber_field.validators import validate_international_phonenumber

from apps.user.models import User
from apps.graphql.schema.user import UserResponse

import jwt
import validators

from dotenv import load_dotenv
import os

load_dotenv(dotenv_path='./.env.dev')


class UserResponseObj:
    def __init__(self, user, error, token):
        self.user = user
        self.error = error
        self.token = token


class ErrorFieldObj:
    def __init__(self, field, error):
        self.field = field
        self.error = error


@strawberry.input
class CreateUserDto:
    email: Optional[str] = strawberry.field(description="add unique email")
    username: str
    display_name: str
    phone: Optional[str]
    password: str


@strawberry.input
class LoginDto:
    email: str
    password: str


ph = PasswordHasher()


def register(options: CreateUserDto) -> UserResponse:
    error_fields = []

    try:
        valid_phone = validate_international_phonenumber(options.phone)
    except:
        error_fields.append(ErrorFieldObj("phone", "phone is invalid"))

    try:
        valid_email = validators.email(options.email)
    except:
        error_fields.append(ErrorFieldObj("email", "email is invalid"))

    try:
        valid_username = validators.length(options.username, min=5, max=15)
    except:
        error_fields.append(ErrorFieldObj(
            "username", "username must between 5 and 15"))

    try:
        valid_password = validators.length(options.password, min=8, max=30)
    except:
        valid_password = validators.length(options.password, min=8, max=30)
        error_fields.append(ErrorFieldObj(
            "password", f"password must between 8 and 30{valid_password}"))

    try:
        valid_display_name = validators.between(
            options.display_name, min=3, max=30)
    except:
        error_fields.append(ErrorFieldObj(
            "display name", "display name must between 3 and 30"))

    if error_fields:
        return UserResponseObj(user=None, error=error_fields, token=None)

    password = ph.hash(options.password)
    user = User(
        email=options.email,
        display_name=options.display_name,
        username=options.username,
        phone=options.phone,
        password=password
    )

    user.save()

    payload_data = {
        "sub": user.pk,
        "name": user.username,
        "display_name": user.display_name
    }

    token = jwt.encode(
        payload=payload_data,
        key=os.getenv("JWT_SECRET")
    )

    if user.pk is None:
        return UserResponseObj(user=None, error=[ErrorFieldObj("some field", "invalid input")])
    else:
        user_exist = User.objects.get(pk=user.pk)
        if user_exist.pk is None:
            return UserResponseObj(user=None, error=[ErrorFieldObj("some field", "invalid input")])
        else:
            return UserResponseObj(user=user, error=None, token=token)


def login(options: LoginDto) -> UserResponse:
    try:
        user = User.objects.get(email=options.email)
    except:
        return UserResponseObj(user=None, error=[ErrorFieldObj("email", "email doesnt exists")], token=None)

    try:
        password_verified = ph.verify(user.password, options.password)
    except:
        return UserResponseObj(user=None, error=[ErrorFieldObj("password", "password is wrong")], token=None)

    payload_data = {
        "sub": user.pk,
        "name": user.username,
        "display_name": user.display_name
    }

    token = jwt.encode(
        payload=payload_data,
        key=os.getenv("JWT_SECRET")
    )

    return UserResponseObj(user=user, error=None, token=token)
