from apps.user.models import User
from apps.otp.models import UnverifPhone
from apps.otp.otp import Whatsapp

import jwt
import pyotp
import base64
from phonenumber_field.validators import validate_international_phonenumber

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
        validate_international_phonenumber(phone)
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
    except:
        unverif_phone = UnverifPhone(phone=phone)
        unverif_phone.save()
        unverif_phone = UnverifPhone.objects.get(phone=phone)

    unverif_phone.count += 1
    unverif_phone.save()

    OTP = pyotp.HOTP(config['TOTP_32'])
    otp_result = OTP.at(unverif_phone.count)

    try:
        res = wa.send(str(phone), f"OTP mu iki cuy:  {otp_result}")
    except:
        raise Exception("failed to send wa")

    return "OTP sent successfully"


def register_verif_otp(phone: str, otp: int):
    try:
        unverif_user = UnverifPhone.objects.get(phone=phone)
    except:
        raise Exception("user doesnt exist")

    try:
        user = User.objects.get(phone=phone)
        if user.pk is not None:
            raise Exception("user already registered")
    except:
        pass

    OTP = pyotp.HOTP(config['TOTP_32'])

    if OTP.verify(otp, unverif_user.count):
        user = User.objects.create(phone=phone)
        user.save()

        if user.pk is not None:
            UnverifPhone.objects.get(phone=phone).delete()

        return user

    raise Exception("wrong otp")


def login_otp_call(phone: str):
    wa = Whatsapp()

    try:
        User.objects.get(phone=phone)
    except:
        raise Exception("user is not exists")

    try:
        unverif_phone = UnverifPhone.objects.get(phone=phone)
    except:
        unverif_phone = UnverifPhone(phone=phone)
        unverif_phone.save()

    unverif_phone.count += 1
    unverif_phone.save()

    OTP = pyotp.HOTP(config['TOTP_32'])
    otp_result = OTP.at(unverif_phone.count)

    try:
        wa.send(str(phone), f"OTP mu iki cuy:  {otp_result}")
    except:
        raise Exception("failed to send wa")

    return "OTP sent successfully"


def login_verif_otp(phone: str, otp: int):  
    try:
        unverif_phone = UnverifPhone.objects.get(phone=phone)
    except:
        raise Exception("user doesnt exist")

    try:
        user = User.objects.get(phone=phone)
    except:
        raise Exception("user doesnt exists")

    OTP = pyotp.HOTP(config['TOTP_32'])

    if OTP.verify(otp, unverif_phone.count):
        unverif_phone.delete()
        return user

    raise Exception("wrong otp")
