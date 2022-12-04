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
<<<<<<< HEAD
=======

    # установить экспертную оценку
    path('articles/setExpertCriteria/', SetExpertArticleCriteria.as_view()),
    # получить оценку эксперта по его ID и ID статьи
    path('articles/retrieveExpertCriteria/', RetrieveExpertArticleCriteria.as_view()),



>>>>>>> 2de12c5bcd918685aeb9667533271dd17a3477b8
]
