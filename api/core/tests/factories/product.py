from django.db import models
from django.template.defaultfilters import title
import factory
from faker import Faker
import apps
import random


fake = Faker()


units = ['1 kg', '1 pack', '1 pcs', '1 ons']
fruits = ('Apple', 'Apricot', 'Banana', 'Blueberry', 'Cherry', 'Durian', 'Grapes', 'Guava', 'Lemon', 'Lime', 'Mango',
          'Melon', 'Orange', 'Papaya', 'Pear', 'Persimmon', 'Pineapple', 'Raspberry', 'Strawberry', 'Tomato', 'Watermelon')
MIN_PRICE = 4000
MAX_PRICE = 100000


class ItemUnitFaker(factory.django.DjangoModelFactory):
    class Meta:
        model = apps.grocery.models.ItemUnit

    title = fake.sentence(ext_word_list=units)


class CategoryFaker(factory.django.DjangoModelFactory):
    class Meta:
        model = apps.grocery.models.Category

    title = fake.sentence(ext_word_list=units)
    slug = apps.grocery.models.Category, fake.word


class ProductFaker(factory.django.DjangoModelFactory):
    class Meta:
        model = apps.grocery.models.Product

    title = fake.sentence()
    slug = fake.sentence()
    categories = fake.sentence()
    image_url = "https://picsum.photos/200/300"
    seller_price = 3000
    normal_price = 3000
    dicount_price = 3000
    item_unit = apps.grocery.models.ItemUnit(
        title=fake.word(ext_word_list=units))


def create_units(l: int):
    for i in range(l):
        ItemUnitFaker.create(title=fake.unique.word())


def create_categories(l: int):
    for i in range(l):
        CategoryFaker.create(
            title=fake.unique.word(),
            slug=fake.unique.word()
        )


def create_products(l: int):
    categories = [
        category for category in apps.grocery.models.Category.objects.filter()]
    units = [unit for unit in apps.grocery.models.ItemUnit.objects.filter()]

    for i in range(l):
        product = apps.grocery.models.Product(
            title=random.choice(fruits),
            slug=fake.sentence(),
            image_url="https://picsum.photos/200/300",
            seller_price=3000,
            normal_price=3000,
            dicount_price=3000,
            item_unit=units[random.randrange(len(units))],
        )

        product.save()

        product.categories.add(categories[random.randrange(len(categories))])
