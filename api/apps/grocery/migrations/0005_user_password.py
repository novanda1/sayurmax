# Generated by Django 3.1.13 on 2021-10-08 07:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('grocery', '0004_auto_20211008_0610'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='password',
            field=models.CharField(default='not set', max_length=254),
        ),
    ]
