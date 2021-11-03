# Generated by Django 3.2.8 on 2021-11-03 04:33

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='UnverifPhone',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('phone', models.BigIntegerField(unique=True, verbose_name='phone number')),
                ('count', models.BigIntegerField(default=0, verbose_name='otp count')),
            ],
            options={
                'verbose_name': 'unverifphone',
                'verbose_name_plural': 'unverifphones',
            },
        ),
    ]
