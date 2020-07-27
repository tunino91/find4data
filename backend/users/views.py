from django.shortcuts import render,redirect
from django.contrib import messages

from .forms import UserRegisterForm
from rest_framework.decorators import api_view, permission_classes, authentication_classes
# Create your views here.

@api_view(['GET','POST'])
def register(request):
    print('request.method: ',request.method)
    print('request.POST: ',request.POST)
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
