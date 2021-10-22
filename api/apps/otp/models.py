from django.db import models


class UnverifPhone(models.Model):
    phone = models.IntegerField(_("phone number"))
    count = models.IntegerField(_("otp count"))

    class Meta:
        verbose_name = _("unverifphone")
        verbose_name_plural = _("unverifphones")

    def __str__(self):
        return self.phone
