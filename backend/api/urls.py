from django.urls import path
from .api import *

urlpatterns = [
    # Авторизация
    path('registration/', RegistrationAPIView.as_view(), name='registraton'),
    path('authorization/', AuthorizationAPIView.as_view(), name='authorization'),
    path('logout/', LogoutAPIView.as_view(), name='logout'),

    # Получить текущего пользователя
    path('users/me/', GetMeAPIView.as_view(), name='getMe'),

    # Получить любого пользователя по username
    path('users/<str:username>/', GetUserAPIView.as_view(), name='getUser'),
]
