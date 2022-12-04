from django.contrib.auth.models import AbstractUser
from django.db import models


# Create your models here.
class CustomUser(AbstractUser):
    email = models.EmailField(help_text='Адрес вашей электронной почты.',
                              unique=True)

    is_expert = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', ]

    def __str__(self):
        return self.username


class Article(models.Model):
    title = models.CharField(max_length=80)
    creator = models.ForeignKey('CustomUser', on_delete=models.CASCADE)
    author = models.CharField(max_length=30)

    text = models.TextField()

    created = models.DateTimeField(auto_now_add=True)
