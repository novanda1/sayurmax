from apps.grocery.models import Category, Product, ItemUnit
from django.contrib import admin


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    exclude = ("slug",)


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    exclude = ("slug",)
    list_display = ('title', 'id')
    filter_horizontal = ('categories',)


@admin.register(ItemUnit)
class ItemUnitAdmin(admin.ModelAdmin):
    pass
