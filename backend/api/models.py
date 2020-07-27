# Create your models here.
from django.db import models
## from users.models import UserEmployer
# from users.models import User
from django.conf import settings # this is actually the settings file inside the root:backend/settings.py

User = settings.AUTH_USER_MODEL

jd_length = settings.MAX_JOB_DESCRIPTION_LENGTH
title_length = settings.MAX_JOB_TITLE_LENGTH

class JobPost(models.Model):
    # TODO: Check which fields should stay blank and which shouldn't
    
    ## user = models.ForeignKey(UserEmployer, on_delete=models.CASCADE) # many users can post many jobs. models.CASCADE will allow to delete all the jobposts to be deleted, if the user is deleted. If you don't want to delete the jobposts when the user is deleted, then add null=True and on_delete=models.SET_NULL
    ## company = UserEmployer.company
    date_created = models.DateField(auto_now_add=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE) # many users can post many jobs. models.CASCADE will allow to delete all the jobposts to be deleted, if the user is deleted. If you don't want to delete the jobposts when the user is deleted, then add null=True and on_delete=models.SET_NULL
    # company = User.company
    title = models.CharField(max_length=title_length, blank=True)
    description = models.CharField(max_length=jd_length, blank=True)

    class Meta:
        ordering = ['-id']

    # Will determine what to return in the JobPosts admin
    def __str__(self):
        return self.title
    
# TODO: Replace JobPostDummy with JobPost. 
# Then, go to api/views.py and correct JobPostDummy to JobPost. 
# Reason I had to do this is beacuse i haven't figured out how to sign in as 'user' and save the job description, title, etc to that 'user' account
class JobPostDummy(models.Model):
    title = models.CharField(max_length=title_length, blank=True)
    description = models.CharField(max_length=jd_length, blank=True)
    date_created = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.title