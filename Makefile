GATEWAY_NAME	   	:= smartbcity/registry-program-ver-gateway
GATEWAY_IMG	    	:= ${GATEWAY_NAME}:${VERSION}
GATEWAY_PACKAGE	   	:= platform:api:api-gateway

FRONT_VER_DOCKERFILE	:= infra/docker/ver-web-app/Dockerfile
FRONT_VER_NAME	    	:= smartbcity/registry-program-ver-web
FRONT_VER_IMG	    	:= ${FRONT_VER_NAME}:${VERSION}
FRONT_VER_LATEST		:= ${FRONT_VER_NAME}:latest

STORYBOOK_DOCKERFILE	:= infra/docker/storybook/Dockerfile
STORYBOOK_NAME	   	 	:= smartbcity/registry-program-ver-storybook
STORYBOOK_IMG	    	:= ${STORYBOOK_NAME}:${VERSION}

docker: package-gateway package-web
docs: package-storybook

package-gateway:
	VERSION=${VERSION} IMAGE_NAME=${GATEWAY_NAME} ./gradlew build ${GATEWAY_PACKAGE}:bootBuildImage -x test
	@docker push ${GATEWAY_IMG}

package-web:
	@docker build -f ${FRONT_VER_DOCKERFILE} -t ${FRONT_VER_IMG} .
	@docker push ${FRONT_VER_IMG}

package-storybook:
	@docker build --no-cache=true -f ${STORYBOOK_DOCKERFILE} -t ${STORYBOOK_IMG} .
	@docker push ${STORYBOOK_IMG}


## DEV ENVIRONEMENT
dev: dev-bclan dev-redis dev-cccev

dev-down: dev-bclan-down dev-redis-down dev-cccev-down

dev-up: dev-bclan-up dev-redis-up dev-cccev-up

## DEV bclan
dev-bclan: dev-bclan-down dev-bclan-up

dev-bclan-up:
	@docker compose --env-file .env_dev -f docker-compose-bclan.yml up -d

dev-bclan-down:
	@docker compose --env-file .env_dev -f docker-compose-bclan.yml down -v;

dev-bclan-log:
	@docker compose --env-file .env_dev -f docker-compose-bclan.yml logs -f

## DEV redis
dev-redis: dev-redis-down dev-redis-up

dev-redis-up:
	@docker compose --env-file .env_dev -f docker-compose-redis.yml up -d

dev-redis-down:
	@docker compose --env-file .env_dev -f docker-compose-redis.yml down -v;

dev-redis-log:
	@docker compose --env-file .env_dev -f docker-compose-redis.yml logs -f

## DEV cccev
dev-cccev: dev-cccev-down dev-cccev-up

dev-cccev-up:
	@docker compose --env-file .env_dev -f docker-compose-cccev.yml pull
	@docker compose --env-file .env_dev -f docker-compose-cccev.yml up -d

dev-cccev-down:
	@docker compose --env-file .env_dev -f docker-compose-cccev.yml down -v;

dev-cccev-log:
	@docker compose --env-file .env_dev -f docker-compose-cccev.yml logs -f