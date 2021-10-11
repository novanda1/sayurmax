from apps.user.models import User


def get_users():
    users = User.objects.all()
    return users

def get_user(pk: int):
    user = User.objects.get(pk=pk)
    return user