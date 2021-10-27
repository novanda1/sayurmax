# Generated by Django 3.1.13 on 2021-10-27 04:32

from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('grocery', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='UserDetail',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False, unique=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='grocery.user', verbose_name='User ID')),
            ],
            options={
                'verbose_name': 'userdetail',
                'verbose_name_plural': 'userdetails',
            },
        ),
        migrations.CreateModel(
            name='Address',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False, unique=True)),
                ('name', models.CharField(max_length=50, verbose_name='address label')),
                ('recipient', models.CharField(max_length=50, verbose_name="recipient's name")),
                ('phone', models.BigIntegerField(verbose_name='phone number')),
                ('city', models.CharField(max_length=50, verbose_name='city')),
                ('postal_code', models.BigIntegerField(verbose_name='Postal Code')),
                ('address', models.CharField(max_length=255, verbose_name='address')),
                ('user_detail', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='user.userdetail', verbose_name='user detail ID')),
            ],
            options={
                'verbose_name': 'address',
                'verbose_name_plural': 'addresss',
            },
        ),
    ]
