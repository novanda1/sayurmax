from apps.otp.otp import Whatsapp
from apps.graphql.services.user import UserServices
from apps.graphql.services.otp import OtpServices
from apps.graphql.utils import const

import pyotp
import strawberry
from strawberry.types import Info
from starlette.requests import Request

from phonenumber_field.validators import validate_international_phonenumber

wa = Whatsapp()
OTP = pyotp.HOTP(const.topt_32)

user_services = UserServices()
otp_services = OtpServices()


class OtpMutation:
    @strawberry.mutation
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

        return "OTP sent successfully"

    @strawberry.mutation
    def auth_verif(self, info: Info, phone: str, otp: str):
        verified = otp_services.verif(phone, otp)
        return verified
