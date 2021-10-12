# Generated by Django 3.1.13 on 2021-10-12 04:42

from django.db import migrations, models
import phonenumber_field.modelfields


class Migration(migrations.Migration):

    dependencies = [
        ('grocery', '0006_auto_20211012_0409'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='display_name',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='email',
            field=models.EmailField(blank=True, default=None, max_length=254, null=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='phone',
            field=phonenumber_field.modelfields.PhoneNumberField(blank=True, default=None, max_length=128, null=True, region=None),
        ),
    ]
