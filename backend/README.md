# Deploy backend side.

## STEP #1.
Установите нужные библиотеки:

```pip3 install django ```

```pip3 install django-cors-headers```

```pip3 install djangorestframework```

## STEP #2
Выполните миграции базы данных:

``` python3 manage.py makemigrations ```

``` python3 manage.py migrate ```

## STEP #2. FINAL.

Запустите backend сервер командой:

```python3 manage.py runserver --insecure```

### На этом вся настройка backend части закончена. Вы можете приступить к запуску frontend-сервера.
