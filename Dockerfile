FROM node:18.18.2-alpine
ENV NODE_ENV production
ENV TZ=America/Bogota
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime 
#RUN apt-get install git -y &&  apt-get install tzdata -y

WORKDIR /usr/src/app
#COPY ["package.json", "package.json"]
#RUN npm install --production --silent && mv node_modules ../
#COPY . .
EXPOSE 3000 4200
#CMD npm start
ENTRYPOINT [ "/bin/sh", "-c", "bash" ]