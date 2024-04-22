VERSION = $(shell cat VERSION)
DOCKER_REPOSITORY = ghcr.io/

GATEWAY_NAME	   	:= ${DOCKER_REPOSITORY}komune-io/registry-program-ver-gateway
GATEWAY_IMG	    	:= ${GATEWAY_NAME}:${VERSION}
GATEWAY_PACKAGE	   	:= platform:api:api-gateway

SCRIPT_NAME	   		:= ${DOCKER_REPOSITORY}komune-io/tr-registry-script
SCRIPT_IMG	    	:= ${SCRIPT_NAME}:${VERSION}
SCRIPT_PACKAGE	   	:= platform:script:script-gateway

FRONT_VER_DOCKERFILE	:= infra/docker/ver-web-app/Dockerfile
FRONT_VER_NAME	    	:= ${DOCKER_REPOSITORY}komune-io/registry-program-ver-web
FRONT_VER_IMG	    	:= ${FRONT_VER_NAME}:${VERSION}
FRONT_VER_LATEST		:= ${FRONT_VER_NAME}:latest

FRONT_CERT_DOCKERFILE	:= infra/docker/registry-certificate-web/Dockerfile
FRONT_CERT_NAME	    	:= ${DOCKER_REPOSITORY}komune-io/registry-certificate-web
FRONT_CERT_IMG	    	:= ${FRONT_CERT_NAME}:${VERSION}
FRONT_CERT_LATEST		:= ${FRONT_CERT_NAME}:latest

.PHONY: lint build test publish promote

lint: docker-web-lint docker-registry-certificate-web-lint

build: docker-gateway-build docker-script-build #docker-web-build docker-registry-certificate-web-build

publish: docker-gateway-build docker-script-publish #docker-web-publish #docker-registry-certificate-web-publish

promote:
	@echo "No promote task"

## gateway
docker-gateway-build:
	VERSION=${VERSION} IMAGE_NAME=${GATEWAY_NAME} ./gradlew build ${GATEWAY_PACKAGE}:bootBuildImage  --imageName ${GATEWAY_IMG} -x test -x jvmTest -x allTests -x jsBrowserTest

docker-gateway-publish-publish:
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
	@docker build --build-arg CI_NPM_AUTH_TOKEN=${CI_NPM_AUTH_TOKEN} --build-arg VERSION=${VERSION} --no-cache -f ${FRONT_VER_DOCKERFILE} -t ${FRONT_VER_IMG} .

docker-web-publish:
	@docker push ${FRONT_VER_IMG}

## registry-certificate
docker-registry-certificate-web-lint:
	docker run --rm -i hadolint/hadolint < infra/docker/registry-certificate-web/Dockerfile

docker-registry-certificate-web-build:
	@docker build --build-arg CI_NPM_AUTH_TOKEN=${CI_NPM_AUTH_TOKEN} --build-arg VERSION=${VERSION} --no-cache -f ${FRONT_CERT_DOCKERFILE} -t ${FRONT_CERT_IMG} .

docker-registry-certificate-web-publish:
	@docker push ${FRONT_CERT_IMG}

