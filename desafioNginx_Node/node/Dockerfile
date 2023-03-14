FROM node:15

WORKDIR /usr/src/app

RUN npm install && \
    npm install express --no-save

COPY . .


CMD ["node","index.js"]