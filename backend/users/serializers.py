from rest_framework import serializers
from django.conf import settings
from .models import User
from django.contrib.auth import authenticate
USERNAME_LENGTH = settings.USERNAME_LENGTH

class UserSerializer(serializers.ModelSerializer):
	class Meta:
		model = User
		## If you want to serialize certain fields, you can do so as down below.
		# fields = ['title','description']
		fields ='__all__'

	def validate_content(self, value):
		if len(value) > USERNAME_LENGTH:
			raise serializers.ValidationError(f'Username can be {USERNAME_LENGTH} characters long')

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(
            validated_data['username'],
            validated_data['email'],
            validated_data['password']
        )
        return user

#This is not properly working
class LoginSerializer(serializers.Serializer):
    class Meta:
        model = User
        fields = ('username', 'password')

    def validate(self, data):    
        user = authenticate(**data)
        print('login user: ',user)
        if user and user.is_active:
            print('CORRECT CREDENTIALS')
            return user
        raise serializers.ValidationError("Incorrect Credentials")