FROM node:20-alpine3.21 as build

WORKDIR /app

COPY platform/web ./

# Needed for keycloakify "postinstall": "keycloakify sync-extensions"
RUN apk add --no-cache git=2.47.3-r0 && \
    git init


#ARG NPM_AUTH_TOKEN
#RUN printf "\
#@komune-io:registry=https://npm.pkg.github.com\n\
#//npm.pkg.github.com/:_authToken=%s\n\
#" "${NPM_AUTH_TOKEN}" > .npmrc

ARG VERSION
ENV VITE_APP_VERSION=$VERSION
RUN yarn install
ENV PATH /app/node_modules/.bin:$PATH
ENV NODE_OPTIONS=--max_old_space_size=4096
RUN yarn workspace web-app build

FROM nginx:1.25.5-alpine

COPY --from=build /app/packages/web-app/dist /var/www
COPY infra/docker/ver-web-app/nginx.conf /etc/nginx/nginx.conf

LABEL org.opencontainers.image.source="https://github.com/komune-io/trace-registry"

RUN chown -R nginx:nginx /var/cache/nginx && \
    chown -R nginx:nginx /var/log/nginx && \
    chown -R nginx:nginx /etc/nginx/conf.d

RUN touch /var/run/nginx.pid && \
        chown -R nginx:nginx /var/run/nginx.pid
USER nginx

EXPOSE 80

ENTRYPOINT ["nginx","-g","daemon off;"]
