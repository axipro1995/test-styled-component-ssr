# Build
FROM node:16-slim as builder
ENV APP_ENV production
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
RUN npm run ssrbuild
CMD ./prerun.sh .env > src/static/env.js ; npm run ssr
