from django.db import models
from django.db.models.fields import UUIDField
from django.utils.translation import gettext as _
import uuid

from apps.user.models import User, UserAddress
from apps.grocery.models import Cart


ORDER_STATUS_CODE = [
    (0, "Progress"),
    (1, "Cancelled"),
    (2, "on Deliver"),
    (3, "Completed")
]

INVOICE_STATUS_CODE = [
    (0, "Unpdaid"),
    (1, "Paid"),
    (2, "Issued")
]

ORDER_INTERACTIVITY_CODE = [
    (0, "Not replied yet"),
    (1, "Said \"YA\" Already"),
]


class Order(models.Model):
    id = UUIDField(primary_key=True, default=uuid.uuid4,
                   editable=False, unique=True)
    user = models.ForeignKey(
        User, verbose_name=_("user id"), on_delete=models.CASCADE)
    address = models.ForeignKey(UserAddress, verbose_name=_(
        "Address"), on_delete=models.SET_DEFAULT, default="deleted")
    order_status_code = models.SmallIntegerField(
        _("Order Status Code"), choices=ORDER_STATUS_CODE, default=0)
    total = models.FloatField(_("Order amount"), default=0.0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = _("Order")
        verbose_name_plural = _("Orders")

    def __str__(self):
        return f"{self.id}"


class OrderItem(models.Model):
    id = UUIDField(primary_key=True, default=uuid.uuid4,
                   editable=False, unique=True)
    order = models.ForeignKey(Order, verbose_name=_(
        "Order ID"), on_delete=models.CASCADE)
    product_id = UUIDField()  # not sure what kind of relation between product
    qty = models.BigIntegerField(_("Quantity"))

    class Meta:
        verbose_name = _("Order Item")
        verbose_name_plural = _("Order Items")

    def __str__(self):
        return f"{self.id}"


class Invoice(models.Model):
    invoice_number = models.AutoField(_("Invoice Number"), primary_key=True)
    order = models.OneToOneField(
        Order, verbose_name=_("Order"), on_delete=models.CASCADE)
    invoice_status_code = models.SmallIntegerField(
        _("Invoice Status Code"), choices=INVOICE_STATUS_CODE)

    class Meta:
        verbose_name = _("Invoice")
        verbose_name_plural = _("Invoices")

    def __str__(self):
        return f"{self.invoice_number}"
