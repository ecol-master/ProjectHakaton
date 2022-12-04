from django.urls import path
from .api import *

urlpatterns = [
    # Авторизация
    path('registration/', RegistrationAPIView.as_view(), name='registraton'),
    path('authorization/', AuthorizationAPIView.as_view(), name='authorization'),
    path('logout/', LogoutAPIView.as_view(), name='logout'),

    # Получить текущего пользователя
    path('users/retrieve/me/', RetrieveMeAPIView.as_view(), name='retrieveMe'),

    # Получить любого пользователя по username
    path('users/retrieve/<str:username>/', RetrieveUserAPIView.as_view(), name='retrieveUser'),

    path('articles/createArticle/', CreateArticleAPIView.as_view(), name='createArticle'),
    path('articles/retrieve/<int:pk>/', RetrieveArticleAPIView.as_view(), name='retrieveArticle'),
    path('articles/list/', ListArticlesAPIView.as_view(), name='ListArticles'),
]
