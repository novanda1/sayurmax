from apps.user.models import User
from apps.graphql.schema.user import UserResponse, FieldError

import jwt

from dotenv import load_dotenv, dotenv_values
import os

config = {
    **dotenv_values(".env.dev"),
    **os.environ,
}

load_dotenv()


def register(phone: str, secret: str) -> UserResponse:
    if secret != config['AUTH_SERCRET']:
        raise Exception("not allowed")

    # validation start
    # error_fields = []

    # try:
    #     validate_international_phonenumber(options.phone)
    # except:
    #     error_fields.append(FieldError("phone", "phone number invalid"))

    # try:
    #     user = User.objects.get(phone=options.phone)
    #     if user.pk is not None:
    #         error_fields.append(FieldError("phone", "already exists"))
    # except:
    #     pass

    # if error_fields:
    #     return UserResponse(user=None, error=error_fields, token=None)

    # validation end

    user = User(phone=str(phone))
    user.save()

    payload_data = {
        "sub": user.pk,
        "phone": user.phone,
    }

    token = jwt.encode(
        payload=payload_data,
        key=config["JWT_SECRET"]
    )

    if user.pk is None:
        return UserResponse(user=None, error=[FieldError("some field", "invalid input")])
    else:
        user_exist = User.objects.get(pk=user.pk)
        if user_exist.pk is None:
            return UserResponse(user=None, error=[FieldError("some field", "invalid input")])
        else:
            return UserResponse(user=user, error=None, token=token)


def login(phone: str, secret: str) -> UserResponse:
    if secret != config["AUTH_SECRET"]:
        raise Exception("not allowed")

    # try:
    #     validate_international_phonenumber(options.phone)
    # except:
    #     return UserResponse(user=None, error=[FieldError("phone", "phone number invalid")], token=None)

    try:
        user = User.objects.get(phone=phone)
    except:
        return UserResponse(user=None, error=[FieldError("phone", "phone number not registered")], token=None)

    payload_data = {
        "sub": user.pk,
        "phone": user.phone,
    }

    token = jwt.encode(
        payload=payload_data,
        key=config["JWT_SECRET"]
    )

    return UserResponse(user=user, error=None, token=token)
