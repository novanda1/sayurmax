from phonenumbers import phonenumber
import strawberry
from typing import Optional
from argon2 import PasswordHasher
from phonenumber_field.validators import validate_international_phonenumber

from apps.user.models import User
from apps.graphql.utils.dto.user import CreateUserDto, LoginDto
from apps.graphql.utils.obj.user import ErrorFieldObj, UserResponseObj

import jwt

from dotenv import load_dotenv, dotenv_values
import os

config = {
    **dotenv_values(".env.dev"),
    **os.environ,
}

load_dotenv()


def register(options: CreateUserDto):
    if options.secret != config['AUTH_SERCRET']:
        raise Exception("not allowed")

    # validation start
    # error_fields = []

    # try:
    #     validate_international_phonenumber(options.phone)
    # except:
    #     error_fields.append(ErrorFieldObj("phone", "phone number invalid"))

    # try:
    #     user = User.objects.get(phone=options.phone)
    #     if user.pk is not None:
    #         error_fields.append(ErrorFieldObj("phone", "already exists"))
    # except:
    #     pass

    # if error_fields:
    #     return UserResponseObj(user=None, error=error_fields, token=None)

    # validation end

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

    # try:
    #     validate_international_phonenumber(options.phone)
    # except:
    #     return UserResponseObj(user=None, error=[ErrorFieldObj("phone", "phone number invalid")], token=None)

    try:
        user = User.objects.get(phone=options.phone)
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
