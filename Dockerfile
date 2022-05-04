FROM node:latest

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
# If you are building your code for production
# RUN npm ci --only=production
COPY ./src .

EXPOSE 8081
CMD [ "node", "server.js" ]