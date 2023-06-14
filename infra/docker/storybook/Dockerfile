#### Stage 1: Build the react application
FROM node:lts as build

WORKDIR /app

COPY *.md ./
COPY storybook ./storybook


WORKDIR /app/storybook

ARG CI_NPM_AUTH_TOKEN
RUN echo -e "\
access=public \n\
 @smartb:registry=https://gitlab.smartb.city/api/v4/projects/127/packages/npm/ \n\
//gitlab.smartb.city/api/v4/projects/127/packages/npm/:_authToken=${CI_NPM_AUTH_TOKEN} \n\
" > .npmrc \

RUN yarn install
ENV PATH /app/storybook/node_modules/.bin:$PATH
ENV STORYBOOK_DISABLE_TELEMETRY=1
ENV NODE_OPTIONS=--openssl-legacy-provider
RUN yarn build-storybook
#RUN npx sb extract

FROM nginx:1.23.2-alpine

COPY --from=build /app/storybook/storybook-static /var/www
COPY infra/docker/storybook/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

ENTRYPOINT ["nginx","-g","daemon off;"]
