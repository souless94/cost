from django.db import models
from django.contrib.auth import get_user_model
# Create your models here.

class Costs(models.Model):
    costId = models.AutoField(primary_key=True)
    description = models.TextField('description')
    amount = models.FloatField('amount')
    purchase_date = models.DateTimeField('date purchased',auto_now_add=True)
    user = models.ForeignKey(get_user_model(),on_delete=models.CASCADE)
    objects = models.Manager()



