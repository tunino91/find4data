# Generated by Django 3.0.7 on 2020-07-23 16:57

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_jobpost_user'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='jobpost',
            options={'ordering': ['-id']},
        ),
    ]
