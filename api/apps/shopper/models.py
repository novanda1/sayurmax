from django.db import models
from argon2 import PasswordHasher
from phonenumber_field.modelfields import PhoneNumberField
from django.utils.translation import gettext as _


ph = PasswordHasher()


class Shopper(models.Model):
    phone = PhoneNumberField(_("Phone"), unique=True)
    password = models.CharField(_("Password"), max_length=150)
    display_name = models.CharField(_("Display Name"), max_length=50)

    def save(self, *args, **kwargs):
        hash = ph.hash(self.password)
        self.password = hash

        super(Shopper, self).save(*args, **kwargs)

    class Meta:
        verbose_name = _("shopper")
        verbose_name_plural = _("shoppers")

    def __str__(self):
        return str(self.display_name)
