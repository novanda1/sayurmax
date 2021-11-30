import datetime

from django.contrib import admin
from django.utils.translation import gettext as _
from django.contrib.admin import RelatedFieldListFilter

from apps.order.models import Order, OrderItem
from gql.types.order import InvoiceStatusCode

day_min_1 = datetime.datetime.today() - datetime.timedelta(days=1)
day_min_2 = datetime.datetime.today() - datetime.timedelta(days=2)

this_day__start = day_min_1.replace(
    hour=23, minute=1).strftime('%Y-%m-%d')

this_day__end = datetime.datetime.today().replace(
    hour=23, minute=1).strftime('%Y-%m-%d')

yesterday__start = day_min_2.replace(
    hour=23, minute=1).strftime('%Y-%m-%d')

yesterday__end = day_min_1.replace(
    hour=23, minute=1).strftime('%Y-%m-%d')

this_day__value = [this_day__start, this_day__end]
yesterday__value = [yesterday__start, yesterday__end]


class DayFilter(admin.SimpleListFilter):
    title = _("Time")
    parameter_name = "time"

    def lookups(self, request, model_admin):

        return (
            (0, 'Yesterday'),
            (1, 'This day'),
        )

    def queryset(self, request, queryset):
        if self.value() == 0:
            return queryset.filter(created_at__range=yesterday__value)
        elif self.value() == 1:
            return queryset.filter(created_at__range=this_day__value)
        else:
            return queryset.filter()


class OrderItemInline(admin.StackedInline):
    model = OrderItem
    extra = 0


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ('id', 'order_status_code',
                    'invoice_status_code')
    list_filter = [DayFilter, 'order_status_code',
                   'invoice_status_code']
    search_fields = ["id"]
    inlines = [OrderItemInline]
