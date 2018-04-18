FROM node:9
MAINTAINER Imdad Areeph <imdadareeph@gmail.com>
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
EXPOSE 4200
CMD ["npm", "start"]
