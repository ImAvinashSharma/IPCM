FROM node:lts-slim

EXPOSE 3001

WORKDIR /server

ENV PORT 3001

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "run", "start"]