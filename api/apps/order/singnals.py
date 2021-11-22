from apps.order.models import OrderItem

from django.db.models.signals import post_save
from django.dispatch import receiver


@receiver(post_save, sender=OrderItem)
def change_order_total(sender, instance, created, **kwargs):
    order = instance.order
    items = OrderItem.objects.filter(order=order)

    total = 0
    for item in items:
        total += item.at_price

    order.save()
