from rest_framework import serializers
from django.conf import settings
from .models import JobPost, JobPostDummy

MAX_JOB_DESCRIPTION_LENGTH = settings.MAX_JOB_DESCRIPTION_LENGTH


class JobPostSerializer(serializers.ModelSerializer):
	class Meta:
		model = JobPost
		## If you want to serialize certain fields, you can do so as down below.
		# fields = ['title','description']
		fields ='__all__'

	def validate_content(self, value):
		if len(value) > MAX_JOB_DESCRIPTION_LENGTH:
			raise serializers.ValidationError('This job description is too long')

class JobPostDummySerializer(serializers.ModelSerializer):
	class Meta:
		model = JobPostDummy
		fields ='__all__'