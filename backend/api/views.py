from django.shortcuts import render, redirect
from django.http import JsonResponse

from rest_framework.authentication import SessionAuthentication
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework.permissions import IsAuthenticated,IsAdminUser

from rest_framework.response import Response
from .serializers import JobPostSerializer, JobPostDummySerializer
import io
from rest_framework.parsers import JSONParser
from users.models import UserEmployer
from django.conf import settings
from .models import JobPost
# Create your views here.

@api_view(['GET'])
def apiOverview(request):
	api_urls = {
        'Display Searched Entity':'/api/JobSearch/<str:title>/',
		'List':'/task-list/',
		'Detail View':'/task-detail/<str:pk>/',
		'Create':'/task-create/',
		'Update':'/task-update/<str:pk>/',
		'Delete':'/task-delete/<str:pk>/',
		}

	return Response(api_urls)

@api_view(['GET'])
def jobDetail(request, job_id, *args, **kwargs):
    qs = JobPost.objects.filter(id=job_id)
    print('filtered_job: ',qs)
    if not qs.exists():
        return Response({}, status=404)
    obj = qs.first()
    serializer = JobPostSerializer(obj)
    # print('serialized data: ',serializer.data)
    return Response(serializer.data, status=201)

# Purpose: Loads all the jobs to display it at the /jobSearch to the user.
@api_view(['GET'])
def jobSearch(request, *args, **kwargs):
    # return Response('http://localhost:3000/jobSearch',{'title':title})
    # return redirect('http://localhost:3000/jobSearch')

    qs = JobPost.objects.all()
    # If you send the qs as: JobPostSerializer(data=qs, many=True), that 'data' variable for some reason it doesn't deserialize it. Solution: you need to send the qs like below, without the 'data'.
    serializer = JobPostSerializer(qs, many=True)
    print('JobPost Serializer: ',serializer)
    print('JobPost Serializer.data: ',serializer.data)
        
    return Response(serializer.data, status=201)
    # return Response({f'Data is not valid'}, status=400)

@api_view(['POST']) # http method the client has to send === POST
## SUCCESS: THIS FUNCTION IS ABLE TO SAVE THE USER TO THE JOBPOST.
## TODO: When you make the login feature on the client side(react), make sure the @authentication_classes and @permission_classes are uncommented down below.
## Also remember that ONLY THE EMPLOYERS who login should be able to create a job 
# @authentication_classes([SessionAuthentication])
# @permission_classes([IsAuthenticated]) # So that only loggedin users can post a job in this view.
def job_create(request, *args, **kwargs):
    ## TODO: Activate the code below when you figure out how to take advantage of the User model that comes with django. You should look into how to customize the USER MODEL that is offered by django to then take advantage of functions such as .is_authenticated
    # if not request.user.is_authenticated:
    #     ## TODO: Create LOGIN_URL in backend/settings.py
    #     return redirect(settings.LOGIN_URL)
    ## TODO: Figure out why the request.POST is returning <QueryDict: {}> When I post a job from front-end @ http://localhost:3000/post
    ## request.POST ##<QueryDict: {}>
    print('request.user: ',request.user) #AnonymousUser
    stream = io.BytesIO(request.body)
    print('stream: ',stream)
    data = JSONParser().parse(stream) # {'title': 'data engineering', 'description': 'you will make things work'}
    print('data: ',data)
    serializer = JobPostSerializer(data=data, partial=True) # JobPostSerializer(data={'title': 'data engineering', 'description': 'you will make things work'}, partial=True) 
    print('serializerz: ',serializer)
    if serializer.is_valid(raise_exception=True):
        ## TODO: Instead of hard-coding 'tunino91' as a username, get it through request.user when you make the login feature on the client side(react)
        user = UserEmployer.objects.get(username='tunino91')
        serializer.save(user=user)
        print('serializerZZ: ',serializer.validated_data)
        return Response(serializer.data, status=201)
    return Response({f'Couldn\'t save it'}, status=400)


## TODO: When you make the login feature on the client side(react), make sure the @authentication_classes and @permission_classes are uncommented down below.
## Also remember that ONLY THE EMPLOYERS who login should be able to delete a job
# @authentication_classes([SessionAuthentication])
# @permission_classes([IsAuthenticated]) # So that only loggedin users can post a job in this view.
@api_view(['DELETE','GET'])
def jobDelete(request, job_id, *args, **kwargs):
    qs = JobPost.objects.filter(id=job_id)
    print('Identified job: ',qs)
    print('request.user: ',request.user)
    if not qs.exists():
        return Response({f'The job you are trying to access with the id = {job_id} doesn\'t exists'}, status=404)
    
    ## TODO: I need to distinguish between the Employer and a regular user. 
    ## CONTINUED: Here I need check if the current user is employer and allow only him the poster to delete the job from the same company 
    # qs = qs.filter(user=request.user)
    user = UserEmployer.objects.get(username=request.user)
    qs = qs.filter(user=user)

    # print('request.user: ',request.user)
    print('Of that user: ',qs)
    if not qs.exists():
        return Response({'message': 'You cannot delete this tweet'})
    obj = qs.first()
    print('object: ',obj)
    # obj.delete()
    return Response({'message':'The job has been deleted'}, status=200)