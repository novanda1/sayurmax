from django.db import models
from django.db.models.fields import UUIDField
from django.utils.translation import gettext as _
import uuid

from apps.user.models import User


SHIPPING_CHOICES = [
    (0, "COD")
]

ORDER_STATUS_CODE = [
    (0, "Progress"),
    (1, "Completed"),
    (2, "Cancelled"),
]

INVOICE_STATUS_CODE = [
    (0, "Unpdaid"),
    (1, "Paid"),
    (2, "Issued")
]


class Order(models.Model):
    id = UUIDField(primary_key=True, default=uuid.uuid4,
                   editable=False, unique=True)
    user = models.ForeignKey(
        User, verbose_name=_("user id"), on_delete=models.CASCADE)
    order_status_code = models.SmallIntegerField(
        _("Order Status Code"), choices=ORDER_STATUS_CODE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = _("Order")
        verbose_name_plural = _("Orders")

    def __str__(self):
        return f"{self.id}"


class OrderDetail(models.Model):
    id = UUIDField(primary_key=True, default=uuid.uuid4,
                   editable=False, unique=True)
    order = models.ForeignKey(Order, verbose_name=_(
        "Order ID"), on_delete=models.CASCADE)
    amount = models.FloatField(_("Order amount"))
    # User have address informations, fill this with that id
    address = models.SmallIntegerField(_("Address"))
    shipName = models.SmallIntegerField(
        _("Shipping Name Status Code"), choices=SHIPPING_CHOICES)

    class Meta:
        verbose_name = _("orderdetail")
        verbose_name_plural = _("orderdetails")

    def __str__(self):
        return f"{self.id}"


class Invoice(models.Model):
    invoice_number = models.AutoField(_("Invoice Number"), primary_key=True)
    order= models.ForeignKey(Order, verbose_name=_(
        "Order ID"), on_delete=models.CASCADE)
    invoice_status_code = models.SmallIntegerField(
        _("Invoice Status Code"), choices=INVOICE_STATUS_CODE)

    class Meta:
        verbose_name = _("Invoice")
        verbose_name_plural = _("Invoices")

    def __str__(self):
        return f"{self.invoice_number}"
