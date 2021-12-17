FROM node:14.17.3-alpine as build

# Create app directory
RUN mkdir -p /opt/front-service/
WORKDIR /opt/front-service/

# Add packages
COPY ./package*.json ./
RUN npm ci --no-fund && npm cache clean --force

COPY . .
RUN npm run build

# production environment
FROM nginx:1.19-alpine
COPY --from=build /opt/front-service/dist/ /opt/www/
RUN rm /etc/nginx/conf.d/default.conf
COPY --from=build /opt/front-service/nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
