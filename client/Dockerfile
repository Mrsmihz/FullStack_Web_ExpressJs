FROM node:14

WORKDIR /client

COPY package*.json /client/

RUN npm install
RUN npm install @vue/cli -g
COPY . /client/
EXPOSE 8080

CMD ["npm", "run", "serve"]
