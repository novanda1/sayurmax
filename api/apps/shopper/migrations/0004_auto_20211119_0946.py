# Generated by Django 3.2.8 on 2021-11-19 02:46

from django.db import migrations
import phonenumber_field.modelfields


class Migration(migrations.Migration):

    dependencies = [
        ('shopper', '0003_alter_shopper_password'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='shopper',
            options={'verbose_name': 'shopper', 'verbose_name_plural': 'shoppers'},
        ),
        migrations.AlterField(
            model_name='shopper',
            name='phone',
            field=phonenumber_field.modelfields.PhoneNumberField(max_length=128, region=None, unique=True, verbose_name='Phone'),
        ),
    ]