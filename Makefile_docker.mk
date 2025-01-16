VERSION = $(shell cat VERSION)
DOCKER_REPOSITORY = ghcr.io/

GATEWAY_NAME	   	:= ${DOCKER_REPOSITORY}komune-io/trace-registry-gateway
GATEWAY_IMG	    	:= ${GATEWAY_NAME}:${VERSION}
GATEWAY_PACKAGE	   	:= platform:api:api-gateway

SCRIPT_NAME	   		:= ${DOCKER_REPOSITORY}komune-io/trace-registry-script
SCRIPT_IMG	    	:= ${SCRIPT_NAME}:${VERSION}
SCRIPT_PACKAGE	   	:= platform:script:script-gateway

FRONT_VER_DOCKERFILE	:= infra/docker/ver-web-app/Dockerfile
FRONT_VER_NAME	    	:= ${DOCKER_REPOSITORY}komune-io/trace-registry-web
FRONT_VER_IMG	    	:= ${FRONT_VER_NAME}:${VERSION}
FRONT_VER_LATEST		:= ${FRONT_VER_NAME}:latest

FRONT_CERT_DOCKERFILE	:= infra/docker/registry-certificate-web/Dockerfile
FRONT_CERT_NAME	    	:= ${DOCKER_REPOSITORY}komune-io/trace-registry-certificate-web
FRONT_CERT_IMG	    	:= ${FRONT_CERT_NAME}:${VERSION}
FRONT_CERT_LATEST		:= ${FRONT_CERT_NAME}:latest

POSTGRES_DOCKERFILE		:= infra/docker/postgres/Dockerfile
POSTGRES_NAME	    	:= trace-registry-postgres
POSTGRES_IMG	    	:= ${POSTGRES_NAME}:${VERSION}
POSTGRES_LATEST			:= ${POSTGRES_NAME}:latest


.PHONY: lint build test publish promote

lint: docker-web-lint docker-registry-certificate-web-lint docker-postgres-lint

build: docker-gateway-build docker-script-build docker-web-build docker-postgres-build #docker-registry-certificate-web-build

publish: docker-gateway-publish docker-script-publish docker-web-publish docker-postgres-publish #docker-registry-certificate-web-publish

promote: docker-docker-promote

## gateway
docker-gateway-build:
	VERSION=${VERSION} IMAGE_NAME=${GATEWAY_NAME} ./gradlew build ${GATEWAY_PACKAGE}:bootBuildImage  --imageName ${GATEWAY_IMG} -x test -x jvmTest -x allTests -x jsBrowserTest

docker-gateway-publish:
	@docker push ${GATEWAY_IMG}

## script
docker-script-build:
	VERSION=${VERSION} IMAGE_NAME=${SCRIPT_NAME} ./gradlew build ${SCRIPT_PACKAGE}:bootBuildImage --imageName ${SCRIPT_IMG} -x test -x jvmTest -x allTests -x jsBrowserTest

docker-script-publish:
	@docker push ${SCRIPT_IMG}

## web
docker-web-lint:
	docker run --rm -i hadolint/hadolint < infra/docker/ver-web-app/Dockerfile

docker-web-build:
	@docker build \
		--build-arg NPM_AUTH_TOKEN=${NPM_PKG_NPMJS_TOKEN} \
		--build-arg CI_NPM_AUTH_TOKEN=${CI_NPM_AUTH_TOKEN} \
		--build-arg VERSION=${VERSION} \
		--no-cache \
		-f ${FRONT_VER_DOCKERFILE} -t ${FRONT_VER_IMG} .

docker-web-publish:
	@docker push ${FRONT_VER_IMG}

## registry-certificate
docker-registry-certificate-web-lint:
	docker run --rm -i hadolint/hadolint < infra/docker/registry-certificate-web/Dockerfile

docker-registry-certificate-web-build:
	@docker build --build-arg CI_NPM_AUTH_TOKEN=${CI_NPM_AUTH_TOKEN} --build-arg VERSION=${VERSION} --no-cache -f ${FRONT_CERT_DOCKERFILE} -t ${FRONT_CERT_IMG} .

docker-registry-certificate-web-publish:
	@docker push ${FRONT_CERT_IMG}

## postgres
docker-postgres-lint:
	docker run --rm -i hadolint/hadolint < infra/docker/postgres/Dockerfile

docker-postgres-build:
	@docker build --no-cache \
		--build-arg CI_NPM_AUTH_TOKEN=${CI_NPM_AUTH_TOKEN} \
		--build-arg VERSION=${VERSION} \
		-f ${POSTGRES_DOCKERFILE} \
		-t ${POSTGRES_IMG} .

docker-postgres-publish:
	@docker build --push \
		--build-arg CI_NPM_AUTH_TOKEN=${CI_NPM_AUTH_TOKEN} \
		--build-arg VERSION=${VERSION} \
		-f ${POSTGRES_DOCKERFILE} \
		-t ghcr.io/komune-io/${POSTGRES_IMG} .

docker-docker-promote:
	@docker buildx build --push \
		--build-arg CI_NPM_AUTH_TOKEN=${CI_NPM_AUTH_TOKEN} \
		--build-arg VERSION=${VERSION} \
		-f ${POSTGRES_DOCKERFILE} \
		-t docker.io/komune/${POSTGRES_IMG} .