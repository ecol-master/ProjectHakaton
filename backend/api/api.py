from django.contrib.auth import login
from django.contrib.auth import logout
from rest_framework.permissions import IsAuthenticated

from rest_framework.views import APIView
from rest_framework.generics import *
from .serializers import *
from .base.response import CustomResponse


class CustomRetrieveAPIView(RetrieveAPIView):
    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        return CustomResponse.make_response(serializer.data)


class RegistrationAPIView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = RegistrationUserSerializer(data=request.data)

        if serializer.is_valid(raise_exception=True):
            if not CustomUser.objects.filter(email=serializer.validated_data.get('email')):
                response = serializer.create(validated_data=serializer.validated_data)
                return CustomResponse.make_response(data=response,
                                                    message='Успешная регистрция.')
            else:
                return CustomResponse.make_response(error=True,
                                                    message='Такой пользователь уже существует.')
        else:
            return CustomResponse.make_response(error=True,
                                                data=serializer.errors)


class AuthorizationAPIView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = AuthorizationUserSerializer(data=request.data)

        if serializer.is_valid(raise_exception=True):
            if CustomUser.objects.filter(email=serializer.validated_data.get('email')):
                user = CustomUser.objects.get(email=serializer.validated_data.get('email'))
                if user.check_password(
                        serializer.validated_data.get('password')):
                    response = {'id': user.pk, 'username': user.username, 'email': user.email,
                                'is_expert': user.is_expert}
                    login(request, user)
                    return CustomResponse.make_response(data=response,
                                                        message='Успешная авторизация.')
                else:
                    return CustomResponse.make_response(error=True,
                                                        message='Некорректные данные.')
            else:
                return CustomResponse.make_response(error=True,
                                                    message='Некорректные данные.')
        else:
            return CustomResponse.make_response(error=True,
                                                data=serializer.errors)


class LogoutAPIView(APIView):
    permission_classes = [IsAuthenticated, ]

    def post(self, request, *args, **kwargs):
        logout(request)
        return CustomResponse.make_response(message='Произведён выход из аккаунта.')


class RetrieveMeAPIView(CustomRetrieveAPIView):
    queryset = CustomUser
    serializer_class = RetrieveUserSerializer
    permission_classes = [IsAuthenticated, ]

    def get_object(self):
        return self.request.user


class RetrieveUserAPIView(CustomRetrieveAPIView):
    queryset = CustomUser
    serializer_class = RetrieveUserSerializer
    lookup_field = 'username'


class CreateArticleAPIView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = CreateArticleSerializer(data=request.data)

        if serializer.is_valid(raise_exception=True):
            response = serializer.create(serializer.validated_data, request=request)
            return CustomResponse.make_response(response, message='Статья опубликована.')
        else:
            return CustomResponse.make_response(error=True,
                                                data=serializer.errors)


class RetrieveArticleAPIView(CustomRetrieveAPIView):
    queryset = Article
    serializer_class = RetrieveArticleSerializer
    lookup_field = 'pk'


class ListArticlesAPIView(ListAPIView):
    queryset = Article.objects.all().order_by('-created')
    serializer_class = RetrieveArticleSerializer

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())

        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(queryset, many=True)
        return CustomResponse.make_response(serializer.data)


class SetExpertArticleCriteria(APIView):
    def post(self, request, *args, **kwargs):
        serializer = ArticleCriteriaSerializer(data=request.data)
        if serializer.is_valid():
            article = Article.objects.get(pk=request.data['article'])
            user = CustomUser.objects.get(pk=request.data['user'])
            if not ArticleCriteria.objects.filter(user=user, article=article):
                instance = ArticleCriteria()
            else:
                instance = ArticleCriteria.objects.get(user=user, article=article)
            for param in request.data:
                try:
                    setattr(instance, param, int(request.data[param]))
                except:
                    pass
            instance.article = article
            instance.user = user
            instance.save()
            return CustomResponse.make_response(message='Изменения сохранены.',
                                                data={'id': instance.pk})
        else:
            return CustomResponse.make_response(error=True,
                                                data=serializer.errors)


class RetrieveExpertArticleCriteria(CustomRetrieveAPIView):
    queryset = Article
    serializer_class = ArticleCriteriaSerializer

    def get_object(self):
        object = ArticleCriteria.objects.get(
            user__pk=self.request.data['user'],
            article__pk=self.request.data['article'])
        return object


class SetUsersArticleCriteria(APIView):
    def post(self, request, *args, **kwargs):
        serializer = ArticleUsersCriteriaSerializer(data=request.data)
        if serializer.is_valid():
            article = Article.objects.get(pk=request.data['article'])
            user = CustomUser.objects.get(pk=request.data['user'])
            if not ArticleUsersCriteria.objects.filter(user=user, article=article):
                instance = ArticleUsersCriteria()
            else:
                instance = ArticleUsersCriteria.objects.get(user=user, article=article)
            instance.c = request.data['c']
            instance.article = article
            instance.user = user
            instance.save()
            return CustomResponse.make_response(message='Изменения сохранены.',
                                                data={'id': instance.pk})
        else:
            return CustomResponse.make_response(error=True,
                                                data=serializer.errors)


class RetrieveUsersArticleCriteria(CustomRetrieveAPIView):
    queryset = Article
    serializer_class = ArticleUsersCriteriaSerializer

    def get_object(self):
        object = ArticleUsersCriteria.objects.get(
            user__pk=self.request.data['user'],
            article__pk=self.request.data['article'])
        return object
