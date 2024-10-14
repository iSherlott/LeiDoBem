FROM node:lts-slim as Builder

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM nextjs as Runner

WORKDIR /app
COPY --from=Builder ./next ./next
RUN npm run start