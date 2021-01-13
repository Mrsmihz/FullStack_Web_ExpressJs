FROM node:14

WORKDIR /server

COPY package*.json ./

RUN npm install
RUN npm install sequelize-cli -g

COPY . /server/

EXPOSE 3000

CMD ["npm", "start"]
