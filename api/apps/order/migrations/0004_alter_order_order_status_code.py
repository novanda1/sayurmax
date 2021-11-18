# Generated by Django 3.2.8 on 2021-11-16 06:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('order', '0003_auto_20211116_1352'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='order_status_code',
            field=models.SmallIntegerField(choices=[(0, 'Unverified'), (1, 'On Progress'), (2, 'On Delivery'), (3, 'Completed')], default=0, verbose_name='Order Status'),
        ),
    ]