from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    # username = models.CharField(max_length=20, blank=False)
    # email = models.EmailField(unique=True,max_length=50)
    bio = models.TextField(max_length=500, blank=True)
    location = models.CharField(max_length=40, blank=True)
    birth_date = models.DateField(null=True, blank=True)
    date_created = models.DateField(auto_now_add=True)
    company = models.CharField(max_length=50, blank=True)
    image = models.FileField(upload_to='images/', blank=True, null=True)
    is_employer = models.BooleanField(blank=True, null=True)
    def __str__(self):
        return self.username