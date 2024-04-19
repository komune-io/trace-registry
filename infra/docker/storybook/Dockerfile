#### Stage 1: Build the react application
FROM node:lts as build

WORKDIR /app

WORKDIR /app/storybook

ARG NPM_AUTH_TOKEN
RUN printf "\
@komune-io:registry=https://npm.pkg.github.com\n\
//npm.pkg.github.com/:_authToken=%s\n\
" "${NPM_AUTH_TOKEN}" > .npmrc

COPY *.md ./
COPY storybook ./storybook

RUN yarn install
ENV PATH /app/storybook/node_modules/.bin:$PATH
ENV STORYBOOK_DISABLE_TELEMETRY=1
ENV NODE_OPTIONS=--openssl-legacy-provider
RUN yarn build-storybook
#RUN npx sb extract

FROM nginx:1.23.2-alpine

COPY --from=build /app/storybook/storybook-static /var/www
COPY infra/docker/storybook/nginx.conf /etc/nginx/nginx.conf

LABEL org.opencontainers.image.source="https://github.com/komune-io/trace-registry"

RUN chown -R nginx:nginx /var/cache/nginx && \
    chown -R nginx:nginx /var/log/nginx && \
    chown -R nginx:nginx /etc/nginx/conf.d && \
    touch /var/run/nginx.pid && \
        chown -R nginx:nginx /var/run/nginx.pid
USER nginx

EXPOSE 80

ENTRYPOINT ["nginx","-g","daemon off;"]
