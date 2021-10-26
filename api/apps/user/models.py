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


class UserDetail(models.Model):
    user = models.ForeignKey(User, verbose_name=_(
        "User ID"), on_delete=models.CASCADE)

    class Meta:
        verbose_name = _("userdetail")
        verbose_name_plural = _("userdetails")

    def __str__(self):
        return self.id


class Address(models.Model):
    name = models.CharField(_("address label"), max_length=50)
    recipient = models.CharField(_("recipient's name"), max_length=50)
    phone = models.BigIntegerField(_("phone number"))
    city = models.CharField(_("city"), max_length=50)
    postal_code = models.BigIntegerField(_("Postal Code"))
    address = models.CharField(_("address"), max_length=255)
    user_detail = models.ForeignKey(UserDetail, verbose_name=_(
        "user detail ID"), on_delete=models.CASCADE)

    class Meta:
        verbose_name = _("address")
        verbose_name_plural = _("addresss")

    def __str__(self):
        return self.id
