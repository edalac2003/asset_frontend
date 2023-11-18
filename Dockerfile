FROM node:18.18.2-alpine
ENV NODE_ENV prodcution
WORKDIR /usr/src/app
COPY ["package.json", "package.json"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOPSE 3000 4200
MAINTAINER name
CMD npm start