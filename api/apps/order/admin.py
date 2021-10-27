from django.contrib import admin
from django.utils.translation import gettext as _
from django.contrib.admin import RelatedFieldListFilter

from apps.order.models import Order, OrderDetail, Invoice
from apps.graphql.schema.order import InvoiceStatusCode


class InvoiceStatusFilter(admin.SimpleListFilter):
    title = _("Invoice Status")
    parameter_name = "invoice"

    def lookups(self, request, model_admin):
        return ((e.value, f"{e.name}") for e in InvoiceStatusCode)

    def queryset(self, request, queryset):
        return queryset.filter(invoice__invoice_status_code=self.value())


class InvoiceDetailInline(admin.StackedInline):
    model = Invoice

    # def has_change_permission(self, request, obj=None):
    #     return False

    def has_delete_permission(self, request, obj=None):
        return False

    def has_add_permission(self, request, obj=None):
        return False


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
    list_filter = [InvoiceStatusFilter]
    inlines = [
        InvoiceDetailInline,
        OrderDetailInline
    ]
