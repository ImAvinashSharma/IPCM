FROM node:lts-slim as build

WORKDIR /client

COPY package.json .

RUN npm install

COPY . .

RUN npm run build


# Nginx up
FROM nginx:stable-alpine

COPY --from=build /client/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
