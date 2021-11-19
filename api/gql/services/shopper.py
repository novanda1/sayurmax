from django.contrib.auth import authenticate, models

from gql.types.shopper import ShopperAuthResponse

from utils import const

import datetime
import pytz
import jwt


class ShopperServices:
    def login(self, username, password):
        shopper = authenticate(username=username, password=password)

        if shopper is not None:
            user = models.User.objects.get(username=shopper)

            payload_data = {
                "sub": str(user.pk),
                "username": str(user.username),
                "exp": datetime.datetime.now(tz=pytz.utc) + datetime.timedelta(days=7)
            }

            token = jwt.encode(
                payload=payload_data,
                key=const.jwt_secret
            )

            return ShopperAuthResponse(user, token)
        else:
            raise Exception("wrong creditentials")
