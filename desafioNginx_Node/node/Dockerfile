FROM node:15

WORKDIR /usr/src/app

RUN npm install && \
    npm install express --no-save &&\
    npm install mysql

COPY . .


CMD ["node","index.js"]