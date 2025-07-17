FROM node:12.13.0-alpine as build

WORKDIR /app

COPY web ./

ARG CI_NPM_AUTH_TOKEN
RUN echo -e "\
access=public \n\
 @smartb:registry=https://gitlab.smartb.city/api/v4/projects/127/packages/npm/ \n\
//gitlab.smartb.city/api/v4/projects/127/packages/npm/:_authToken=${CI_NPM_AUTH_TOKEN} \n\
" > .npmrc

RUN yarn install
ENV PATH /app/node_modules/.bin:$PATH
RUN yarn workspace cccev-app build

FROM nginx:1.17.0-alpine

COPY --from=build /app/packages/cccev-app/build /var/www
COPY infra/docker/cccev-web-app/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

ENTRYPOINT ["nginx","-g","daemon off;"]
