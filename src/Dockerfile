FROM node:12.18.3-alpine

WORKDIR /app
COPY ./src .
RUN apk add --no-cache make gcc g++ python
RUN npm install

CMD [ "node", "index.js" ]