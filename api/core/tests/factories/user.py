import factory
from faker import Faker
import apps


fake = Faker()


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
        address = UserAddressFactory.create(
            name=fake.sentence(),
            recipient=fake.name(),
            phone=fake.phone_number(),
            city=fake.city(),
            postal_code=fake.postcode(),
            address=fake.street_address(),
            detail=fake.paragraph(
                nb_sentences=1),
            user=apps.user.models.User.objects.get(
                phone=user.phone),
        )
