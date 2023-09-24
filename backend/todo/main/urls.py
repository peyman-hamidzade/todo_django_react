from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TODOViewSet

router = DefaultRouter()
router.register(r'todos', TODOViewSet, basename='todo')

urlpatterns = [
    path('', include(router.urls)),
]