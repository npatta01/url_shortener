


```
docker build -t app .
```

```
docker run -p 3000:3000 -it app 
```


APP_NAME="np-url-shortener"



heroku create ${APP_NAME}


echo "Deploying to ${APP_NAME}"

heroku container:push web --app ${APP_NAME}

heroku container:release web --app ${APP_NAME}
heroku open --app ${APP_NAME}
heroku logs --tail --app ${APP_NAME}