from django.contrib import admin
from apps.user.models import User, UserAddress
from django.contrib.auth.models import User as UserOld
from django.contrib.auth.models import Group


class AddressInline(admin.StackedInline):
    model = UserAddress
    extra = 0


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ('id', 'phone', 'display_name')
    fields = ('phone', 'display_name')
    inlines = [AddressInline]


# admin.site.unregister(UserOld)
# admin.site.unregister(Group)
