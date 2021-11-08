import pyotp
import hashlib

from apps.user.models import User
from apps.graphql.services.user import UserServices
from apps.graphql.utils import const

# just wanna set secret (s) and change default interval but got an unexpected keyword argument 'interval'
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

    def verif(self, phone, otp, secret):
        # check wheter user already request an OTP
        try:
            unverif_user = UnverifPhone.objects.get(phone=phone)
        except:
            raise Exception("Please request an OTP first")

        if OTP.verify(otp, unverif_user.count):
            try:
                # user already exist (signin)
                User.objects.get(phone=phone)
                user = user_services.login(secret)
            except:
                # user not exist (signup)
                user = user_services.register(phone, secret)

            if result.error is not None:
                raise Exception(result)

            UnverifPhone.objects.get(phone=phone).delete()

            return result

        raise Exception("wrong otp")
