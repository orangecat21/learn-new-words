FROM node:12-alpine AS builder

WORKDIR /app
COPY package.json /app/package.json
RUN yarn install --prod
RUN yarn cache clean 
COPY . /app
RUN yarn build

FROM node:12-alpine

RUN yarn global add serve
WORKDIR /app
COPY --from=builder /app/build .
EXPOSE 80
ENTRYPOINT [ "serve", "-s", "-p", "80" ]
