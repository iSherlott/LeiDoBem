FROM node:lts-alpine as Builder

WORKDIR /app
COPY . .
RUN ["npm install"]
RUN ["npm run build"]

FROM node:lts-alpine as Runner

WORKDIR /app
COPY --from=Builder ./next ./next
RUN ["npm run start"]