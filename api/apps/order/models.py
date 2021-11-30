from django.db import models
from django.db.models.fields import UUIDField
from django.utils.translation import gettext as _
import uuid

from apps.user.models import User, UserAddress
from apps.grocery.models import Cart, Product


ORDER_STATUS_CODE = [
    (0, "Unverified"),
    (1, "On Progress"),
    (2, "On Delivery"),
    (3, "Completed"),
    (4, "Cancelled"),
]

INVOICE_STATUS_CODE = [
    (0, "Unpaid"),
    (1, "Paid"),
    (2, "Issued")
]


class Order(models.Model):
    id = models.AutoField(_("Invoice Number"), primary_key=True)
    user = models.ForeignKey(
        User, verbose_name=_("User"), on_delete=models.CASCADE, editable=False)
    address = models.ForeignKey(UserAddress, verbose_name=_(
        "Address"), on_delete=models.SET_NULL, blank=True, null=True)
    order_status_code = models.SmallIntegerField(
        _("Order Status"), choices=ORDER_STATUS_CODE, default=0)
    invoice_status_code = models.SmallIntegerField(
        _("Invoice Status"), choices=INVOICE_STATUS_CODE, default=0)
    total = models.FloatField(
        _("Total Invoice"), help_text="dont touch this field (auto add)", default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = _("Order")
        verbose_name_plural = _("Orders")

    def __str__(self):
        return f"#{self.id}: {self.user.display_name}"

    def save(self, *args, **kwargs):
        total = 0
        items = OrderItem.objects.filter(order=self)

        for item in items:
            total += item.at_price * item.qty

        self.total = total

        super(Order, self).save(*args, **kwargs)


class OrderItem(models.Model):
    id = UUIDField(primary_key=True, default=uuid.uuid4,
                   editable=False, unique=True)
    order = models.ForeignKey(Order, verbose_name=_(
        "Order ID"), on_delete=models.CASCADE)
    product = models.ForeignKey(
        Product, verbose_name=_("Product"), on_delete=models.CASCADE)
    at_price = models.BigIntegerField(
        _("At price (auto add)"), help_text="dont touch this field (auto add)", default=0)
    qty = models.BigIntegerField(_("Quantity"), default=1)

    class Meta:
        verbose_name = _("Order Item")
        verbose_name_plural = _("Order Items")

    def save(self, *args, **kwargs):
        product_price = self.product.dicount_price if self.product.dicount_price else self.product.normal_price
        self.at_price = product_price * self.qty

        super(OrderItem, self).save(*args, **kwargs)

    def __str__(self):
        return f"{self.id}"
