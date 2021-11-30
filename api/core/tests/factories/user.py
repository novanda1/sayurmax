import factory
from faker import Faker
import apps
import textwrap


fake = Faker(['id_ID'])


class UserFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = apps.user.models.User

    display_name = fake.name()
    phone = fake.phone_number()


class UserAddressFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = apps.user.models.UserAddress

    name = fake.sentence()
    recipient = fake.name()
    phone = fake.phone_number()
    city = fake.city()
    postal_code = fake.postcode()
    address = fake.street_address()
    detail = fake.paragraph(nb_sentences=1)
    user = apps.user.models.User


def create(l: int):
    for i in range(l):
        user = UserFactory.create(
            display_name=fake.unique.name(), phone=fake.unique.phone_number())

        if user.phone and user.display_name:
            address = UserAddressFactory.create(
                name=textwrap.wrap(
                    fake.word(), width=255, break_long_words=False)[0],
                recipient=user.display_name,
                phone=fake.phone_number(),
                city=fake.city(),
                postal_code=fake.postcode(),
                address=textwrap.wrap(
                    fake.street_address(), width=255, break_long_words=False)[0],
                detail=fake.paragraph(
                    nb_sentences=1),
                user=apps.user.models.User.objects.get(
                    phone=user.phone),
            )
