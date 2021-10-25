import uuid
from django.db import models
from django.db.models.fields import UUIDField
from django.utils.translation import gettext as _


class User(models.Model):
    id = UUIDField(primary_key=True, default=uuid.uuid4,
                   editable=False, unique=True)
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
