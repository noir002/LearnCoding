from django.http import HttpResponse
from django.shortcuts import render

def home(request):
    #return HttpResponse("Hello. You are learning Django .")
    return render(request, 'website/index.html')

def about(request):
    return HttpResponse("Hello. This is Django about page .")

def contact(request):
    return HttpResponse("Hello. Contact here for learning Django .")