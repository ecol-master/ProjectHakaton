# Doc Frontend

Если вы находитесь в корневой папке проекта (ProjectHakaton) то в первую очередь нужно переместиться в директорию *frontend* следующей командой: 
```
cd frontend
```

Далее нам необходимо устнавить все зависимости из файла package.json, для этого выполним данную команду:
```
npm install
```

# Структура проекта
каталог _pages_ содержит все компоненты, отрендеривающиеся на стороне пользователя

в *App.jsx* с помощью компоненты Route настроивается роутинговая система приложения. О-о

# Возможные ошибки

1) Проверьте, что сервера запущены на разных портах, иначе они могут перекрывать друг друга