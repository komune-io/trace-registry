.PHONY: docker docs dev dev-down dev-up dev-bclan dev-redis dev-cccev dev-bclan-down dev-bclan-up dev-bclan-log dev-redis-down dev-redis-up dev-redis-log dev-cccev-pull dev-cccev-down dev-cccev-up dev-cccev-log

GATEWAY_NAME	   	:= smartbcity/registry-program-ver-gateway
GATEWAY_IMG	    	:= ${GATEWAY_NAME}:${VERSION}
GATEWAY_PACKAGE	   	:= platform:api:api-gateway

FRONT_VER_DOCKERFILE	:= infra/docker/ver-web-app/Dockerfile
FRONT_VER_NAME	    	:= smartbcity/registry-program-ver-web
FRONT_VER_IMG	    	:= ${FRONT_VER_NAME}:${VERSION}
FRONT_VER_LATEST		:= ${FRONT_VER_NAME}:latest

FRONT_CERT_DOCKERFILE	:= infra/docker/registry-certificate-web/Dockerfile
FRONT_CERT_NAME	    	:= smartbcity/registry-certificate-web
FRONT_CERT_IMG	    	:= ${FRONT_CERT_NAME}:${VERSION}
FRONT_CERT_LATEST		:= ${FRONT_CERT_NAME}:latest

STORYBOOK_DOCKERFILE	:= infra/docker/storybook/Dockerfile
STORYBOOK_NAME	   	 	:= smartbcity/registry-program-ver-storybook
STORYBOOK_IMG	    	:= ${STORYBOOK_NAME}:${VERSION}

docker: docker-gateway docker-web docker-registry-certificate-web
docs: package-storybook

docker-gateway:
	VERSION=${VERSION} IMAGE_NAME=${GATEWAY_NAME} ./gradlew build ${GATEWAY_PACKAGE}:bootBuildImage -x test
	@docker push ${GATEWAY_IMG}

docker-web:
	@docker build --progress=plain --build-arg CI_NPM_AUTH_TOKEN=${CI_NPM_AUTH_TOKEN} --build-arg VERSION=${VERSION} --no-cache -f ${FRONT_VER_DOCKERFILE} -t ${FRONT_VER_IMG} .
	@docker push ${FRONT_VER_IMG}

docker-registry-certificate-web:
	@docker build --build-arg CI_NPM_AUTH_TOKEN=${CI_NPM_AUTH_TOKEN} --build-arg VERSION=${VERSION} --no-cache -f ${FRONT_CERT_DOCKERFILE} -t ${FRONT_CERT_IMG} .
	@docker push ${FRONT_CERT_IMG}

package-storybook:
	@docker build --build-arg CI_NPM_AUTH_TOKEN=${CI_NPM_AUTH_TOKEN} --build-arg VERSION=${VERSION} --no-cache=true -f ${STORYBOOK_DOCKERFILE} -t ${STORYBOOK_IMG} .
	@docker push ${STORYBOOK_IMG}


## DEV ENVIRONEMENT
dev: dev-bclan dev-redis dev-cccev dev-fs

dev-down: dev-bclan-down dev-redis-down dev-cccev-down dev-fs-down

dev-up: dev-bclan-up dev-redis-up dev-cccev-up dev-fs-up

## DEV bclan
dev-bclan: dev-bclan-down dev-bclan-up

dev-bclan-up:
	@docker compose --env-file .env_dev -f docker-compose-bclan.yml up -d

dev-bclan-down:
	@docker compose --env-file .env_dev -f docker-compose-bclan.yml down -v

dev-bclan-log:
	@docker compose --env-file .env_dev -f docker-compose-bclan.yml logs -f

## DEV redis
dev-redis: dev-redis-down dev-redis-up

dev-redis-up:
	@docker compose --env-file .env_dev -f docker-compose-redis.yml up -d

dev-redis-down:
	@docker compose --env-file .env_dev -f docker-compose-redis.yml down -v

dev-redis-log:
	@docker compose --env-file .env_dev -f docker-compose-redis.yml logs -f

## DEV fs
dev-fs: dev-fs-down dev-fs-up

dev-fs-up:
	@docker compose --env-file .env_dev -f docker-compose-fs.yml up -d

dev-fs-down:
	@docker compose --env-file .env_dev -f docker-compose-fs.yml down -v

dev-fs-log:
	@docker compose --env-file .env_dev -f docker-compose-fs.yml logs -f

## DEV cccev
dev-cccev: dev-cccev-down dev-cccev-up

dev-cccev-pull:
	@docker compose --env-file .env_dev -f docker-compose-cccev.yml pull

dev-cccev-up:
	@docker compose --env-file .env_dev -f docker-compose-cccev.yml pull
	@docker compose --env-file .env_dev -f docker-compose-cccev.yml up -d

dev-cccev-down:
	@docker compose --env-file .env_dev -f docker-compose-cccev.yml down -v

dev-cccev-log:
	@docker compose --env-file .env_dev -f docker-compose-cccev.yml logs -f