from django.db import models
from django.utils.translation import gettext as _

class UnverifPhone(models.Model):
    phone = models.BigIntegerField(_("phone number"), blank=False)
    count = models.BigIntegerField(_("otp count"), blank=False, default=0)

    class Meta:
        verbose_name = _("unverifphone")
        verbose_name_plural = _("unverifphones")

    def __str__(self):
        return self.phone
