from django.contrib import admin
from apps.shopper.models import Shopper


@admin.register(Shopper)
class ShopperAdmin(admin.ModelAdmin):
    list_display = ('phone', 'display_name')
    fields = ('phone', 'display_name', 'password')
