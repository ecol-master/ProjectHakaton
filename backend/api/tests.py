import pprint

import requests

session = requests.session()

protocol = 'http://'
domain = '127.0.0.1'
port = ':8000'
api_path = '/api/'
api_version = 'v1/'
api_url = protocol + domain + port + api_path + api_version

csrfmiddlewaretoken = ''


# класс с настройками.
class Settings:
    email: str = 'your_email@gmail.com'
    password: str = 'your_pwd'


def method(name: str, data: dict = {}, post: bool = True):
    global csrfmiddlewaretoken

    data['csrfmiddlewaretoken'] = csrfmiddlewaretoken
    if post:
        response = session.post(api_url + name + '/', data=data)
    else:
        response = session.get(api_url + name + '/', data=data)

    result = response.json()
    return result


def auth(login: str, password: str, login_value: str = 'email'):
    global session, csrfmiddlewaretoken
    response = session.post(api_url + 'authorization/', data={login_value: login, 'password': password})
    csrftoken = response.cookies['csrftoken']
    csrfmiddlewaretoken = csrftoken

    return response.json()


# pprint.pprint(auth('TestUser3@gmail.com', 'dRh4PzhjP2vwCDZ'))
print()
# pprint.pprint(method('articles/list', post=False))
print()
# pprint.pprint(method('articles/retrieve/3', data={
#     'title': 'Дмитрий кузьмин',
#     'author': 'YolkinEgor',
#     'text': 'Дмитрий кузьмин малышечка сосочка девочка я бы ему отлизал <3',
# }, post=False))

pprint.pprint(method('articles/setExpertCriteria', data={
    'article': 5,
    'user': 3,
    'c1': 5,
    'c2': 15
}))
pprint.pprint(method('articles/retrieveExpertCriteria', data={
    'article': 5,
    'user': 3,
    'c1': 5
}, post=False))
