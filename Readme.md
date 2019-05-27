# Url Shortener

This project is a simple url shortener build 



## Local Deployment
```
docker build -t shortener .
docker run  -p 3005:3005 -it shortener
```

## Heroku Deployment
```
APP_NAME="np-url-shortener"

heroku create ${APP_NAME}


echo "Deploying to ${APP_NAME}"

heroku container:push web --app ${APP_NAME}

heroku container:release web --app ${APP_NAME}
heroku open --app ${APP_NAME}
heroku logs --tail --app ${APP_NAME}
```