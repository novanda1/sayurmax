from apps.user.models import User
from apps.otp.models import UnverifPhone

import jwt
import pyotp
import base64

from dotenv import load_dotenv, dotenv_values
import os

config = {
    **dotenv_values(".env.dev"),
    **os.environ,
}

load_dotenv()


def register_otp_call(phone: str):
    wa = Whatsapp()

    try:
        validate_international_phonenumber(options.phone)
    except:
        raise Exception("phone is invalid")

    try:
        user = User.objects.get(phone=phone)
        if user.pk is not None:
            raise Exception("user already registered")
    except:
        pass

    try:
        unverif_phone = UnverifPhone.objects.get(phone=phone)
    except ObjectDoesNotExist:
        UnverifPhone.objects.create(phone=phone)
        unverif_phone = UnverifPhone.objects.get(phone=phone)

    unverif_phone.count += 1
    unverif_phone.save()

    OTP = pyotp.HOTP(config['TOTP_32'])
    otp_result = OTP.at(unverif_phone.count)

    try:
        res = wa.send(str(options.phone), "OTP mu iki cuy: " + otp_result)
    except:
        raise Exception("failed to send wa")

    return "OTP sent successfully"


def register_verif_otp(phone:str, otp: int):
    try:
        user = UnverifPhone.objects.get(phone=phone)
    except:
        raise Exception("user doesnt exist")

    try:
        user = User.objects.get(phone=phone)
        if user.pk is not None:
            raise Exception("user already registered")
    except:
        pass
    
    OTP = pyotp.HOTP(config['TOTP_32'])

    if OTP.verify(otp, user.count):
        user = User.objects.create(phone=phone)
        user.save()
        return user
    
    raise Exception("wrong otp")