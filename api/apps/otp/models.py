from django.db import models


class OTPUserCount(models.Model):
    user_id = models.IntegerField(_("user id"))
    count = models.IntegerField(_("otp count"))

    class Meta:
        verbose_name = _("otpusercount")
        verbose_name_plural = _("otpusercounts")

    def __str__(self):
        return self.count
