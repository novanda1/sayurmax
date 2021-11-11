import pyotp
import hashlib
from random import randint

from apps.user.models import User
from apps.otp.models import UnverifPhone
from gql.services.user import UserServices
from utils import const


# just wanna set secret (s) and change default interval but got an unexpected keyword argument 'interval'
# it should be pyotp.HOTP(s=const.topt_32, interval=60)
# argument reference https://github.com/pyauth/pyotp/blob/develop/src/pyotp/totp.py
OTP = pyotp.HOTP(const.topt_32, 6, hashlib.sha1, None, None, 60)


user_services = UserServices()


class OtpServices:
    def call(self, phone):
        try:
            unverif_phone = UnverifPhone.objects.get(phone=phone)
        except:
            unverif_phone = UnverifPhone(phone=phone)
            unverif_phone.save()

        unverif_phone.count = randint(23, 9999)
        unverif_phone.save()

        otp_result = OTP.at(unverif_phone.count)

        return otp_result

    def verif(self, phone, otp):
        # check wheter user already request an OTP
        try:
            unverif_user = UnverifPhone.objects.get(phone=phone)
        except:
            raise Exception("Please request an OTP first")

        if OTP.verify(otp, unverif_user.count):
            try:
                # user already exist (signin)
                User.objects.get(phone=phone)
                result = user_services.login(phone)
            except:
                # user not exist (signup)
                result = user_services.register(phone)

            if result.error is not None:
                raise Exception(result)

            UnverifPhone.objects.get(phone=phone).delete()

            return result

        raise Exception("wrong otp")
