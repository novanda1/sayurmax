# Generated by Django 3.2.8 on 2021-11-16 08:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='useraddress',
            name='detail',
            field=models.TextField(default='tidak diset', verbose_name='Address Detail'),
            preserve_default=False,
        ),
    ]