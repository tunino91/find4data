from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm

class UserRegisterForm(UserCreationForm):
    email = forms.EmailField(required=True)

    class Meta:
        model = User # So when we write form.save() it is going to save it to our user model. This is the model that the form will be interacting with. 
        fields = ['username','email','password1','password2']
