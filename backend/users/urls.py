from django.contrib import admin
from django.urls import path, include
from django.contrib.auth import views as auth_views
from . import views
# from rest_framework import urls

urlpatterns = [
    path('',views.register, name="register" ),
    path('login/',views.login, name='login'),
    path('rest-auth/', include('rest_auth.urls')),
    # path('bla/',include(urls)),
    # path('login/', auth_views.LoginView.as_view(template_name='users/login.html'),name='login'),
    ## path('/dashboard', views.dashboard, name="jobSearch"),
]