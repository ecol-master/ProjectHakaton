from django.contrib.auth import login
from django.contrib.auth import logout

from rest_framework.views import APIView
from rest_framework.generics import *
from .serializers import *
from .base.response import CustomResponse


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
                    response = {'id': user.pk, 'username': user.username, 'email': user.email}
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
    def post(self, request, *args, **kwargs):
        logout(request)
        return CustomResponse.make_response(message='Произведён выход из аккаунта.')


