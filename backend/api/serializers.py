from rest_framework import serializers
from .models import *


class AuthorizationUserSerializer(serializers.Serializer):
    email = serializers.EmailField(help_text=('Укажите адрес '
                                              'вашей электронной '
                                              'почты.'))
    password = serializers.CharField(min_length=6, help_text=('Укажите пароль '
                                                              'вашей учётной '
                                                              'записи.'))


class RegistrationUserSerializer(serializers.Serializer):
    username = serializers.CharField(min_length=4, max_length=12,
                                     help_text=('Укажите ваше имя '
                                                'пользователя (никнейм).'))
    email = serializers.EmailField(help_text=('Укажите адрес '
                                              'вашей электронной '
                                              'почты.'))
    password = serializers.CharField(min_length=6, help_text=('Укажите пароль '
                                                              'вашей учётной '
                                                              'записи.'))

    def create(self, validated_data):
        model = CustomUser(username=validated_data.get('username'),
                           email=validated_data.get('email'),
                           password=validated_data.get('password'))
        model.save()

        response = {'id': model.pk, 'username': model.username, 'email': model.email}
        return response
