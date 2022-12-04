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


class ArticleCriteria(models.Model):
    user = models.ForeignKey('CustomUser', on_delete=models.CASCADE)
    article = models.ForeignKey('Article', on_delete=models.CASCADE)

    c1 = models.IntegerField(default=0, blank=True)
    c2 = models.IntegerField(default=0, blank=True)
    c3 = models.IntegerField(default=0, blank=True)
    c4 = models.IntegerField(default=0, blank=True)
    c5 = models.IntegerField(default=0, blank=True)
    c6 = models.IntegerField(default=0, blank=True)
    c7 = models.IntegerField(default=0, blank=True)
    c8 = models.IntegerField(default=0, blank=True)


class ArticleUsersCriteria(models.Model):
    user = models.ForeignKey('CustomUser', on_delete=models.CASCADE)
    article = models.ForeignKey('Article', on_delete=models.CASCADE)

    c = models.IntegerField(default=0, blank=True)