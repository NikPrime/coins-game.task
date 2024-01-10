Для запуска приложения нужен установленный docker и docker-compose
Для того, чтобы запустить приложение, необходимо зайти в корневую папку и выполнить команду **docker-compose up --build**

Также убедитесь, что порты 3000 и 5432 не заняты

База данных поднимется на порту 5432, после этого запустятся миграции и сиды, и потом уже само nest.js-приложение.
(Приложение запускается в режиме разработки, думаю этого более чем достаточно)

После того как все запустится, протестировать документацию можно будет по ссылке: http://localhost:3000/api/swagger
