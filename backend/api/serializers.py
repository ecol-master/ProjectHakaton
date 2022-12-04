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
    username = serializers.CharField(min_length=4, max_length=30,
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
                           email=validated_data.get('email'))
        model.set_password(validated_data.get('password'))
        model.save()

        response = {'id': model.pk, 'username': model.username, 'email': model.email}
        return response


class RetrieveUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('id', 'is_superuser',
                  'username', 'email',
                  'is_active',)


class CreateArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        exclude = ('created', 'creator')

    def create(self, validated_data, *args, **kwargs):
        model = Article()
        model.text = validated_data['text']
        model.title = validated_data['title']
        model.author = validated_data['author']
        model.creator = kwargs['request'].user
        model.save()

        return {'id': model.pk, 'creator': model.creator.username}


class RetrieveArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = '__all__'
