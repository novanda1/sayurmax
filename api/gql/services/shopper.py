from django.contrib.auth import authenticate, models

from apps.order.models import Order

from gql.types.shopper import ShopperAuthResponse
from gql.types.order import OrderStatusCode
from gql.services.order import OrderService

from utils import const

import datetime
import pytz
import jwt


order_services = OrderService()


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

    def change_order_status(self, id, status: OrderStatusCode):
        order = Order.objects.get(id=id)

        order.order_status_code = status.value

        try:
            order.save()
        except:
            raise Exception("change status failed")

        return order_services.order(id)
