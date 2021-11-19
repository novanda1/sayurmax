# Generated by Django 3.2.8 on 2021-11-19 01:29

from django.db import migrations, models
import phonenumber_field.modelfields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Shopper',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('phone', phonenumber_field.modelfields.PhoneNumberField(max_length=128, region=None, verbose_name='Phone')),
                ('password', models.BigIntegerField(verbose_name='Password')),
                ('display_name', models.CharField(max_length=50, verbose_name='Display Name')),
            ],
        ),
    ]