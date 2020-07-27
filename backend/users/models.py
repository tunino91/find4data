from django.db import models

# Create your models here.

class UserEmployer(models.Model):
    date_created = models.DateField(auto_now_add=True)
    username = models.CharField(max_length=20, blank=False)
    email = models.EmailField(unique=True,max_length=50)
    company = models.CharField(max_length=50, blank=True)
    location = models.CharField(max_length=100, blank=True)
    
    def __str__(self):
        return self.username
