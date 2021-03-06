from utils.whatsapp import Whatsapp
from gql.services.user import UserServices
from gql.services.otp import OtpServices
from utils import const

import pyotp
import strawberry
from strawberry.types import Info
from starlette.requests import Request

from phonenumber_field.validators import validate_international_phonenumber
from asgiref.sync import sync_to_async

wa = Whatsapp()
OTP = pyotp.HOTP(const.topt_32)

user_services = UserServices()
otp_services = OtpServices()


class OtpMutation:
    @strawberry.mutation
    @sync_to_async
    def auth_call(self, phone: str):
        try:
            validate_international_phonenumber(phone)
        except:
            raise Exception("phone is invalid")

        otp_result = otp_services.call(phone)

        try:
            res = wa.send(str(phone), wa.auth_message % (otp_result,))
        except:
            raise Exception("failed to send wa")

        if "200" in str(res):
            return "OTP sent successfully"
        else:
            raise Exception(res)

    @strawberry.mutation
    @sync_to_async
    def auth_verif(self, info: Info, phone: str, otp: str):
        verified = otp_services.verif(phone, otp)
        return verified
