from apps.grocery.model import category, product
from django.contrib import admin


@admin.register(category.Category)
class UserAdmin(admin.ModelAdmin):
    exclude=("slug",)

@admin.register(product.Product)
class UserAdmin(admin.ModelAdmin):
    exclude=("slug",)
    list_display = ('title', )
    fields = ('title','categories')

