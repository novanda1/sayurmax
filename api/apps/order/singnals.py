from apps.order.models import OrderItem

from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver


@receiver(post_save, sender=OrderItem)
def save_order_total(sender, instance, created, **kwargs):
    order = instance.order
    items = OrderItem.objects.filter(order=order)

    total = 0
    for item in items:
        total += item.at_price

    order.save()


@receiver(post_delete, sender=OrderItem)
def delete_order_total(sender, instance, using, **kwargs):
    order = instance.order
    items = OrderItem.objects.filter(order=order)

    total = 0
    for item in items:
        total += item.at_price

    order.save()
