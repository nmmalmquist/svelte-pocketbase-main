#NOT FOR DEV: only use for deployment purposes

FROM node:19 AS build

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build

#use another image bc we dont need all the node stuff, just the static files
FROM nginx:1.19-alpine
COPY --from=build /app/dist /usr/share/nginx/html
RUN echo "running on port 8080"