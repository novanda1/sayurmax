from apps.grocery.models import Category, Product, ItemUnit, Cart, CartProduct
from django.contrib import admin


class CartProductInline(admin.TabularInline):
    model = CartProduct


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    exclude = ("slug",)


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    exclude = ("slug",)
    list_display = ('title', 'id')
    filter_horizontal = ('categories',)
    search_fields = ['title']


@admin.register(ItemUnit)
class ItemUnitAdmin(admin.ModelAdmin):
    pass


@admin.register(Cart)
class CartAdmin(admin.ModelAdmin):
    inlines = [CartProductInline]
