from django.db import models
from django.template.defaultfilters import title
import factory
from faker import Faker
import apps
import random


fake = Faker()


units = ['1 kg', '1 pack', '1 pcs', '1 ons']
categories = ['hidroponik', 'konvensional', 'Segar', 'Imperfect']
fruits = ('Apple', 'Apricot', 'Banana', 'Blueberry', 'Cherry', 'Durian', 'Grapes', 'Guava', 'Lemon', 'Lime', 'Mango',
          'Melon', 'Orange', 'Papaya', 'Pear', 'Persimmon', 'Pineapple', 'Raspberry', 'Strawberry', 'Tomato', 'Watermelon')
MIN_PRICE = 4000
MAX_PRICE = 100000


class ItemUnitFaker(factory.django.DjangoModelFactory):
    class Meta:
        model = apps.grocery.models.ItemUnit

    title = random.choice(units)


class CategoryFaker(factory.django.DjangoModelFactory):
    class Meta:
        model = apps.grocery.models.Category

    title = random.choice(categories)
    slug = apps.grocery.models.Category, fake.word


class ProductFaker(factory.django.DjangoModelFactory):
    class Meta:
        model = apps.grocery.models.Product

    title = random.choice(fruits)
    slug = random.choice(fruits)
    categories = random.choice(categories)
    image_url = "https://picsum.photos/200/300"
    seller_price = 3000
    normal_price = 3000
    dicount_price = 3000
    item_unit = random.choice(units)


def create_units():
    for u in units:
        ItemUnitFaker.create(title=u)


def create_categories():
    for c in categories:
        CategoryFaker.create(
            title=c,
            slug=c
        )


def create_products():
    categories = [
        category for category in apps.grocery.models.Category.objects.filter()]
    units = [unit for unit in apps.grocery.models.ItemUnit.objects.filter()]

    for f in fruits:
        product = apps.grocery.models.Product(
            title=f,
            slug=f,
            image_url="https://picsum.photos/200/300",
            seller_price=3000,
            normal_price=3000,
            dicount_price=3000,
            item_unit=units[random.randrange(len(units))],
        )

        product.save()

        product.categories.add(categories[random.randrange(len(categories))])
