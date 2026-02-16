FROM node:25-alpine

RUN apk add --no-cache curl

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "node", "app.js" ]
