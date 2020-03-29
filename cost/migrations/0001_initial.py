# Generated by Django 3.0.4 on 2020-03-29 09:44

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Costs',
            fields=[
                ('costId', models.AutoField(primary_key=True, serialize=False)),
                ('description', models.TextField(verbose_name='description')),
                ('amount', models.FloatField(verbose_name='amount')),
                ('purchase_date', models.DateTimeField(auto_now_add=True, verbose_name='date purchased')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
