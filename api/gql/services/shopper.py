from apps.shopper.models import Shopper
from gql.types.shopper import ShopperAuthResponse

from argon2 import PasswordHasher
from utils import const

import datetime
import pytz
import jwt

ph = PasswordHasher()


class ShopperServices:
    def login(self, phone, password):
        try:
            shopper = Shopper.objects.get(phone=phone)
        except:
            raise Exception("shopper not found")

        verified = ph.verify(shopper.password, password)

        if verified:
            payload_data = {
                "sub": str(shopper.pk),
                "phone": str(shopper.phone),
                "exp": datetime.datetime.now(tz=pytz.utc) + datetime.timedelta(days=7)
            }

            token = jwt.encode(
                payload=payload_data,
                key=const.jwt_secret
            )

            return ShopperAuthResponse(shopper, token)

        else:
            raise Exception("wrong password")
