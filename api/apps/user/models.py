from django.db import models
from django.utils.translation import gettext as _
from phonenumber_field.modelfields import PhoneNumberField


class User(models.Model):
    email = models.EmailField(max_length=254, blank=True, default=None)
    username = models.CharField(max_length=100)
    display_name = models.CharField(max_length=100)
    phone = PhoneNumberField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        app_label = 'grocery'
        verbose_name = _("user")
        verbose_name_plural = _("users")

    def __str__(self):
        return self.name
