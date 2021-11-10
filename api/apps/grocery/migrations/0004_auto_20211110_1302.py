# Generated by Django 3.2.8 on 2021-11-10 06:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('grocery', '0003_remove_cart_total_price'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='how_to_keep',
            field=models.TextField(blank=True, verbose_name='How To Keep'),
        ),
        migrations.AlterField(
            model_name='product',
            name='information',
            field=models.TextField(blank=True, verbose_name='Product Infromation'),
        ),
        migrations.AlterField(
            model_name='product',
            name='nutrition',
            field=models.TextField(blank=True, verbose_name='Product Nutrition'),
        ),
    ]