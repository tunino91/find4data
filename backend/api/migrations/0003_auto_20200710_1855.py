# Generated by Django 3.0.7 on 2020-07-10 18:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_jobpost_user'),
    ]

    operations = [
        migrations.CreateModel(
            name='JobPostDummy',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(blank=True, max_length=40)),
                ('description', models.CharField(blank=True, max_length=200)),
                ('date_created', models.DateField(auto_now_add=True)),
            ],
        ),
        migrations.AddField(
            model_name='jobpost',
            name='description',
            field=models.CharField(blank=True, max_length=200),
        ),
        migrations.AlterField(
            model_name='jobpost',
            name='title',
            field=models.CharField(blank=True, max_length=40),
        ),
    ]
