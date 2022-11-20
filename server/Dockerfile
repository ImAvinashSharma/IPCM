FROM node:lts-slim

EXPOSE 3001
WORKDIR /server

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "run", "start"]