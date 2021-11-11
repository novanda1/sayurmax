from apps.user.models import User, UserAddress
from gql.types.user import UserResponse, FieldError, UserAddress as UserAddressType
from utils import const
from gql.types.user import UserDto


from typing import Optional
import jwt


class UserServices:
    def register(self, phone: str):
        try:
            user = User(phone=str(phone))
            user.save()
        except:
            raise Exception("failed to create user")

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

    def login(self, phone: str):
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

    def edit_user(self, options: UserDto):
        try:
            user = User.objects.get(phone=options.phone)
        except:
            raise Exception("user doesnt exists")

        user.phone = options.phone or user.phone
        user.display_name = options.display_name or user.display_name

        user.save()

        return user

    def add_user_address(
        self,
        current_user_phone: str,
        phone: str,
        name: str,
        recipient: str,
        city: str,
        postal_code: str,
        address: str
    ):

        try:
            user = User.objects.get(phone=current_user_phone)
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

        return user_address

    def edit_user_address(
        self,
        id: str,
        current_user_phone: str,
        phone: Optional[str] = "",
        name: Optional[str] = "",
        recipient: Optional[str] = "",
        city: Optional[str] = "",
        postal_code: Optional[str] = "",
        address: Optional[str] = ""
    ):

        try:
            user = User.objects.get(phone=current_user_phone)
        except:
            raise Exception("user doesnt exists")

        try:
            user_address = UserAddress.objects.get(id=id)
        except:
            raise Exception("address not found")

        user_address.phone = phone or user_address.phone
        user_address.name = name or user_address.name
        user_address.recipient = recipient or user_address.recipient
        user_address.city = city or user_address.city
        user_address.postal_code = postal_code or user_address.postal_code
        user_address.address = address or user_address.address

        user_address.save()

        return user_address

    def get_user_address(self, id):
        user_address = UserAddress.objects.get(id=id)
        return user_address

    def get_user_addresses(self, phone):
        user_addresses = UserAddress.objects.filter(user__phone=phone)
        return user_addresses
