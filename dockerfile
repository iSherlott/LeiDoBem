FROM node:lts-alpine as Builder

WORKDIR /app
COPY . .
RUN ["npm install"]
RUN ["npm run build"]

FROM node:lts-alpine as Runner

WORKDIR /app

COPY --from=Builder ./next ./next
COPY --from=Builder ./node_modules ./node_modules
COPY --from=Builder ./package.json ./package.json

RUN ["npm run start"]