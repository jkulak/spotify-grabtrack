FROM node:17-alpine3.14

WORKDIR /app

ENV PORT=${APP_PORT:-3001}

ADD ./app/ ./

EXPOSE 3001

CMD [ "yarn", "start" ]
