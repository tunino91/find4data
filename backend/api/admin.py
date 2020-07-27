from django.contrib import admin

# Register your models here.
from .models import JobPost, JobPostDummy



class JobPostAdmin(admin.ModelAdmin):
    ## Added 'USER' column to admin. Shows who posted the Job
    # list_display = ['__str__', 'user']
    list_display = ['__str__', 'title']
    ## Adds a search field in the JobPosts in admin. Job Posts then can ben searched and filtered by company name,date_created,etc.
    # search_fields = ['user__company','user__location','title','date_created',]
    search_fields = ['title','date_created',]
    class Meta:
        model = JobPost

class JobPostDummyAdmin(admin.ModelAdmin):
    ## Added 'USER' column to admin. Shows who posted the Job
    list_display = ['__str__', 'title']

    ## Adds a search field in the JobPosts in admin. Job Posts then can ben searched and filtered by company name,date_created.
    search_fields = ['title','date_created','description']
    class Meta:
        model = JobPostDummy


admin.site.register(JobPost, JobPostAdmin)
admin.site.register(JobPostDummy, JobPostDummyAdmin)