from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('',views.apiOverview, name="api-overview" ),
    path('jobSearch/', views.jobSearch, name="jobSearch"),
    path('post-new-job/',views.job_create, name='post-new-job'),
    path('jobDetail/<int:job_id>',views.jobDetail, name='jobDetail'),
    path('jobDelete/<int:job_id>',views.jobDelete, name='jobDelete'),
    # path('post-new-job/<str:description>',views.job_create, name='post-new-job'),
]
