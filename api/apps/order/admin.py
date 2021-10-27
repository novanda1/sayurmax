from django.contrib import admin
from apps.order.models import Order, OrderDetail, Invoice


class OrderDetailInline(admin.StackedInline):
    model = OrderDetail

    def has_change_permission(self, request, obj=None):
        return False

    def has_delete_permission(self, request, obj=None):
        return False

    def has_add_permission(self, request, obj=None):
        return False


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ('id', 'order_status_code',)
    fields = ('order_status_code',)
    inlines = [
        OrderDetailInline
    ]
