# Generated by Django 3.0.7 on 2020-07-22 18:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_auto_20200722_1853'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='is_employer',
            field=models.BooleanField(blank=True, null=True),
        ),
    ]
