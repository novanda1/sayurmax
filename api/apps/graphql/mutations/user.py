import strawberry
from typing import Optional
from argon2 import PasswordHasher
from phonenumber_field.validators import validate_international_phonenumber

from apps.user.models import User
from apps.graphql.schema.user import UserResponse
from apps.otp.otp import Whatsapp

import jwt
import validators

from dotenv import load_dotenv, dotenv_values
import os

config = {
    **dotenv_values(".env.dev"),
    **os.environ,
}

load_dotenv()


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
    phone: str
    secret: str


@strawberry.input
class LoginDto:
    phone: str
    secret: str


ph = PasswordHasher()


def register(options: CreateUserDto):
    if options.secret != config['AUTH_SERCRET']:
        raise Exception("not allowed")

    # validation start
    error_fields = []

    try:
        validate_international_phonenumber(options.phone)
    except:
        error_fields.append(ErrorFieldObj("phone", "phone number invalid"))

    try:
        User.objects.get(phone=options.phone)
        if user.pk is not None:
            error_fields.append(ErrorFieldObj("phone", "already exists"))
    except:
        pass

    if error_fields:
        return UserResponseObj(user=None, error=error_fields, token=None)

    # validation end

    wa = Whatsapp()
    try:
        res = wa.send(str(options.phone), "great")
        print(str(options.phone))
    except:
        raise Exception("failed to send wa")

    user = User(phone=str(options.phone))
    user.save()

    payload_data = {
        "sub": user.pk,
        "phone": user.phone,
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


def login(options: LoginDto):
    if options.secret != os.getenv("AUTH_SECRET"):
        raise Exception("not allowed")

    try:
        validate_international_phonenumber(options.phone)
    except:
        return UserResponseObj(user=None, error=[ErrorFieldObj("phone", "phone number invalid")], token=None)

    try:
        user = User.objects.get(username=options.phone)
    except:
        return UserResponseObj(user=None, error=[ErrorFieldObj("phone", "phone number not registered")], token=None)

    payload_data = {
        "sub": user.pk,
        "phone": user.phone,
    }

    token = jwt.encode(
        payload=payload_data,
        key=os.getenv("JWT_SECRET")
    )

    return UserResponseObj(user=user, error=None, token=token)
