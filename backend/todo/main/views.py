from django.shortcuts import render
from rest_framework import viewsets
from .models import TODO
from .serializers import TODOSerializer
# Create your views here.

class TODOViewSet(viewsets.ModelViewSet):
    queryset = TODO.objects.all()
    serializer_class = TODOSerializer