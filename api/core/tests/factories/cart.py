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


def create(l: int):
    users = list(apps.grocery.models.User.objects.all())
    products = list(apps.grocery.models.Product.objects.all())

    for i in users:
        random_user = random.choice(users)
        random_product = random.choice(products)

        cart = apps.grocery.models.Cart(user=random_user)
        cart.save()

        CartProductFactory(
            product=random_product,
            amount=random.randrange(10), cart=cart)
