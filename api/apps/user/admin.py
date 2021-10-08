from django.contrib import admin
from apps.user.models import User


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ('display_name', 'username', 'email',
                    'phone')
    fields = ('display_name', 'username', 'email',
              'phone')
