# from django.shortcuts import render,redirect
# from django.contrib import messages

# from .forms import UserRegisterForm
# from rest_framework.decorators import api_view, permission_classes, authentication_classes
# # Create your views here.

# @api_view(['GET','POST'])
# def register(request):
#     print('request.method: ',request.method)
#     print('request.POST: ',request.POST)
#     if request.method == 'POST':
#         form = UserRegisterForm(request.POST)
#         if form.is_valid():
#             form.save()
#             username = form.cleaned_data.get('username')
#             messages.success(request, message=f'Account created for {username}!')
#             return redirect('api-overview')
#     else:
#         form = UserRegisterForm()
#     return render(request,'users/register.html',context={'form':form})
    
from django.shortcuts import render,redirect
from django.contrib import messages

from .forms import UserRegisterForm, UserLoginForm
from rest_framework.decorators import api_view, permission_classes, authentication_classes

## from .models import UserEmployer
# from .models import User
from django.conf import settings


User = settings.AUTH_USER_MODEL
@api_view(['GET','POST'])
def register(request):
    print('request:',request)
    print('request.method: ',request.method)
    print('request.POST: ',request.POST)
    print('request.user:',request.user)
    if request.method == 'POST':
        form = UserRegisterForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            messages.success(request, message=f'Account created for {username}!')
            return redirect('api-overview')
    else:
        form = UserRegisterForm()
    return render(request,'users/register.html',context={'form':form})
    

# from django.contrib.auth import authenticate, login
# def login(request):
#     print('request:',request)
#     print('request.method: ',request.method)
#     print('request.POST: ',request.POST)
#     print('request.user:',request.user)
#     username = request.POST['username']
#     password = request.POST['password']
    
#     user = authenticate(request, username=username, password=password)
#     if user is not None:
#         login(request, user)
#         # Redirect to a success page.
#         ...
#     else:

from django.contrib.auth import authenticate, login
@api_view(['GET','POST'])
def login(request):
    print('request:',request)
    print('request.method: ',request.method)
    print('request.POST: ',request.POST)
    print('request.user:',request.user)
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        print('now?')
        # form = UserLoginForm(request.POST)
        user = authenticate(request, username=username, password=password)
        # if form.is_valid():
        #     form.save()
        #     return redirect('api-overview')

        print('or now?')
        print('authenticated user: ',user)
        if user is not None:
            login(request, user)
            # print('authenticated user: ',user)
            messages.success(request, message=f'Account {username} is logged in!')
            return redirect('api-overview')
        
    else:
        form = UserLoginForm()
    return render(request,'users/login.html',context={'form':form})