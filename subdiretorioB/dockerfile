FROM node:18.19.0-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:18.19.0-alpine as production-stage
WORKDIR /app
COPY --from=build-stage /app .
EXPOSE 3000

CMD ["npm", "start"]