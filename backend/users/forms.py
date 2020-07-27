# from django import forms
# from django.contrib.auth.models import User
# from django.contrib.auth.forms import UserCreationForm

# class UserRegisterForm(UserCreationForm):
#     email = forms.EmailField(required=True)

#     class Meta:
#         model = User # So when we write form.save() it is going to save it to our user model. This is the model that the form will be interacting with. 
#         fields = ['username','email','password1','password2']

from django import forms

from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
# from .models import UserEmployer
# from django.contrib.auth.models import User
from .models import User

from django.conf import settings
# Create your views here.

# User = settings.AUTH_USER_MODEL
class UserRegisterForm(UserCreationForm):
    email = forms.EmailField(required=True)

    class Meta:
        model = User # So when we write form.save() it is going to save it to our user model. This is the model that the form will be interacting with. 
        # fields = ['username','email','password1','password2']
        fields = ['username','email','company','password1','password2',]

class UserLoginForm(AuthenticationForm):
    # class Meta:
    #     model = User # So when we write form.save() it is going to save it to our user model. This is the model that the form will be interacting with. 
    #     # fields = ['username','email','password1','password2']
    #     fields = ['username','email','company','password',]

    def confirm_login_allowed(self, user):
        if not user.is_active:
            raise forms.ValidationError(
                _("This account is inactive."),
                code='inactive',
            )
        if user.username.startswith('b'):
            raise forms.ValidationError(
                _("Sorry, accounts starting with 'b' aren't welcome here."),
                code='no_b_users',
            )