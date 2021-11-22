import factory
from faker import Faker
import apps
import random


class CartFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = apps.grocery.models.Cart

    user = apps.user.models.User


class CartProductFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = apps.grocery.models.CartProduct

    product = apps.grocery.models.Product
    amount = random.randrange(10)
    cart = apps.grocery.models.Cart


def create():
    users = list(apps.grocery.models.User.objects.all())
    products = list(apps.grocery.models.Product.objects.all())

    for user in users:

        cart = apps.grocery.models.Cart(user=user)
        cart.save()

        for i in range(random.randint(1, 10)):

            CartProductFactory(
                product=products[i],
                amount=random.randint(1, 10), cart=cart
            )
