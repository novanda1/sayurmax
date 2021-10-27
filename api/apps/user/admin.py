from django.contrib import admin
from apps.user.models import User
from django.contrib.auth.models import User as UserOld
from django.contrib.auth.models import Group


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ('id', 'phone', 'display_name')
    fields = ('phone', 'display_name')


admin.site.unregister(UserOld)
admin.site.unregister(Group)
