from django.contrib import admin
from apps.user.models import User


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ('phone', 'display_name')
    fields = ('phone', 'display_name')
