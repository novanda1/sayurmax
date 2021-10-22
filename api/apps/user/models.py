from django.db import models
from django.utils.translation import gettext as _
from phonenumber_field.modelfields import PhoneNumberField


class User(models.Model):
    display_name = models.CharField(max_length=100, blank=True, null=True)
    phone = models.CharField(_("phone number"), max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        app_label = 'grocery'
        verbose_name = _("user")
        verbose_name_plural = _("users")

    def __str__(self):
        return str(self.phone)
