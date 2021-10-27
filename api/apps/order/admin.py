from django.contrib import admin
from apps.order.models import Order, OrderDetail, Invoice


class OrderDetailInline(admin.TabularInline):
    model = OrderDetail


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ('id', 'order_status_code',)
    fields = ('order_status_code',)
    inlines = [
        OrderDetailInline
    ]
