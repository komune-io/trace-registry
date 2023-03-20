FROM node:19.8.1-alpine3.17 as build

WORKDIR /app

COPY platform/web ./
COPY .npmrc ./

ARG VERSION
ENV REACT_APP_VERSION=$VERSION

RUN yarn install
ENV PATH /app/node_modules/.bin:$PATH
ENV NODE_OPTIONS=--max_old_space_size=4096
RUN yarn workspace web-app build

FROM nginx:1.23.3-alpine

COPY --from=build /app/packages/web-app/build /var/www
COPY infra/docker/ver-web-app/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

ENTRYPOINT ["nginx","-g","daemon off;"]
