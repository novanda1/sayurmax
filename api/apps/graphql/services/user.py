from apps.user.models import User, UserAddress
from apps.graphql.schema.user import UserResponse, FieldError, UserAddress as UserAddressType
from apps.graphql.utils import const

import jwt


class UserServices:
    def register(phone: str, secret: str):
        if secret != const.auth_secret:
            raise Exception("not allowed")

        user = User(phone=str(phone))
        user.save()

        payload_data = {
            "sub": str(user.pk),
            "phone": user.phone,
        }

        token = jwt.encode(
            payload=payload_data,
            key=const.jwt_secret
        )

        if user.pk is None:
            return UserResponse(user=None, error=[FieldError("some field", "invalid input")])
        else:
            user_exist = User.objects.get(pk=user.pk)
            if user_exist.pk is None:
                return UserResponse(user=None, error=[FieldError("some field", "invalid input")])
            else:
                return UserResponse(user=user, error=None, token=token)

    def login(phone: str, secret: str):
        if secret != const.auth_secret:
            raise Exception("not allowed")

        try:
            user = User.objects.get(phone=phone)
        except:
            return UserResponse(user=None, error=[FieldError("phone", "phone number not registered")], token=None)

        payload_data = {
            "sub": str(user.pk),
            "phone": user.phone,
        }

        token = jwt.encode(
            payload=payload_data,
            key=const.jwt_secret
        )

        return UserResponse(user=user, error=None, token=token)

    def add_user_address(
        self,
        phone: str,
        name: str,
        recipient: str,
        city: str,
        postal_code: str,
        address: str
    ):

        try:
            user = User.objects.get(phone=phone)
        except:
            raise Exception("user doesnt exists")

        user_address = UserAddress(
            phone=phone,
            name=name,
            recipient=recipient,
            city=city,
            postal_code=postal_code,
            address=address,
            user=user
        )

        user_address.save()

        return UserAddressType(
            id=user_address.id,
            name=user_address.name,
            recipient=user_address.recipient,
            phone=user_address.phone,
            city=user_address.city,
            postal_code=user_address.postal_code,
            address=user_address.address
        )
