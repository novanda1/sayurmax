# Generated by Django 3.1.13 on 2021-10-26 11:29

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
            name='Order',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False, unique=True)),
                ('order_status_code', models.SmallIntegerField(choices=[(0, 'Progress'), (1, 'Completed'), (2, 'Cancelled')], verbose_name='Order Status Code')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('user_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='grocery.user', verbose_name='user id')),
            ],
            options={
                'verbose_name': 'Order',
                'verbose_name_plural': 'Orders',
            },
        ),
        migrations.CreateModel(
            name='OrderDetail',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('amount', models.FloatField(verbose_name='Order amount')),
                ('address', models.SmallIntegerField(verbose_name='Address')),
                ('shipName', models.SmallIntegerField(choices=[(0, 'COD')], verbose_name='Shipping Name Status Code')),
                ('order_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='order.order', verbose_name='Order ID')),
            ],
            options={
                'verbose_name': 'orderdetail',
                'verbose_name_plural': 'orderdetails',
            },
        ),
        migrations.CreateModel(
            name='Invoice',
            fields=[
                ('invoice_number', models.AutoField(primary_key=True, serialize=False, verbose_name='Invoice Number')),
                ('invoice_status_code', models.SmallIntegerField(choices=[(0, 'Unpdaid'), (1, 'Paid'), (2, 'Issued')], verbose_name='Invoice Status Code')),
                ('order_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='order.order', verbose_name='Order ID')),
            ],
            options={
                'verbose_name': 'Invoice',
                'verbose_name_plural': 'Invoices',
            },
        ),
    ]
