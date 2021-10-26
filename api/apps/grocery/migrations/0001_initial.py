# Generated by Django 3.1.13 on 2021-10-26 14:38

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Cart',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_id', models.IntegerField(verbose_name='User ID')),
                ('product_id', models.IntegerField(verbose_name='Product ID')),
                ('amount', models.IntegerField(verbose_name='Product Amount')),
            ],
            options={
                'verbose_name': 'cart',
                'verbose_name_plural': 'carts',
            },
        ),
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
                ('slug', models.SlugField(unique=True)),
            ],
            options={
                'verbose_name': 'Category',
                'verbose_name_plural': 'Categories',
            },
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False, unique=True)),
                ('display_name', models.CharField(blank=True, max_length=100, null=True)),
                ('phone', models.CharField(max_length=50, verbose_name='phone number')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
            options={
                'verbose_name': 'user',
                'verbose_name_plural': 'users',
            },
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False, unique=True)),
                ('title', models.CharField(max_length=250)),
                ('slug', models.SlugField(unique=True)),
                ('image_url', models.CharField(max_length=250, verbose_name='Image Url')),
                ('normal_price', models.BigIntegerField()),
                ('dicount_price', models.BigIntegerField(blank=True, default=None, null=True)),
                ('item_unit', models.CharField(choices=[('pack', 'pack'), ('gram', 'gram'), ('kg', 'kg'), ('pcs', 'pcs')], max_length=10)),
                ('information', models.TextField(verbose_name='Product Infromation')),
                ('nutrition', models.TextField(verbose_name='Product Nutrition')),
                ('how_to_keep', models.TextField(verbose_name='How To Keep')),
                ('categories', models.ManyToManyField(to='grocery.Category')),
            ],
            options={
                'verbose_name': 'Product',
                'verbose_name_plural': 'Products',
            },
        ),
    ]
