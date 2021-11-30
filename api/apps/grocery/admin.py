from apps.grocery.models import Category, Product, ItemUnit, Cart, CartProduct
from django.contrib import admin


class CartProductInline(admin.TabularInline):
    model = CartProduct

    def has_add_permission(self, request, obj=None):
        return False

    def has_delete_permission(self, request, obj=None):
        return False

    def has_change_permission(self, request, obj=None):
        return False


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

    def has_add_permission(self, request, obj=None):
        return False

    def has_delete_permission(self, request, obj=None):
        return False

    def has_change_permission(self, request, obj=None):
        return False
