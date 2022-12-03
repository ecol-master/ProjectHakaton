from django.urls import path
from .api import *

urlpatterns = [
    path('registration/', RegistrationAPIView.as_view(), name='registraton'),
    path('authorization/', AuthorizationAPIView.as_view(), name='authorization'),
    path('logout/', LogoutAPIView.as_view(), name='logout'),
]
