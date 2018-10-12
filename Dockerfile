FROM node:8

WORKDIR /srv

COPY package.json ./

RUN yarn add

COPY . .

EXPOSE 6996
