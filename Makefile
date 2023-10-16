.PHONY: docker docs dev dev-down dev-up dev-bclan dev-redis dev-cccev dev-bclan-down dev-bclan-up dev-bclan-log dev-redis-down dev-redis-up dev-redis-log dev-cccev-pull dev-cccev-down dev-cccev-up dev-cccev-log

GATEWAY_NAME	   	:= smartbcity/registry-program-ver-gateway
GATEWAY_IMG	    	:= ${GATEWAY_NAME}:${VERSION}
GATEWAY_PACKAGE	   	:= platform:api:api-gateway

SCRIPT_NAME	   		:= smartbcity/tr-registry-script
SCRIPT_IMG	    	:= ${SCRIPT_NAME}:${VERSION}
SCRIPT_PACKAGE	   	:= platform:script:script-gateway

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

libs: package-kotlin
docker: docker-gateway docker-script docker-web docker-registry-certificate-web
docs: package-storybook

package-kotlin:
	VERSION=${VERSION} ./gradlew build publishToMavenLocal publish --stacktrace -x test -x jvmTest -x allTests

docker-gateway:
	VERSION=${VERSION} IMAGE_NAME=${GATEWAY_NAME} ./gradlew build ${GATEWAY_PACKAGE}:bootBuildImage -x test -x allTests
	@docker push ${GATEWAY_IMG}

docker-script:
	VERSION=${VERSION} IMAGE_NAME=${SCRIPT_NAME} ./gradlew build ${SCRIPT_PACKAGE}:bootBuildImage -x test -x allTests
	@docker push ${SCRIPT_IMG}

docker-web:
	@docker build --build-arg CI_NPM_AUTH_TOKEN=${CI_NPM_AUTH_TOKEN} --build-arg VERSION=${VERSION} --no-cache -f ${FRONT_VER_DOCKERFILE} -t ${FRONT_VER_IMG} .
	@docker push ${FRONT_VER_IMG}

docker-registry-certificate-web:
	@docker build --build-arg CI_NPM_AUTH_TOKEN=${CI_NPM_AUTH_TOKEN} --build-arg VERSION=${VERSION} --no-cache -f ${FRONT_CERT_DOCKERFILE} -t ${FRONT_CERT_IMG} .
	@docker push ${FRONT_CERT_IMG}

docker-script-init:
	@docker build --build-arg CI_NPM_AUTH_TOKEN=${CI_NPM_AUTH_TOKEN} --build-arg VERSION=${VERSION} --no-cache -f ${FRONT_CERT_DOCKERFILE} -t ${FRONT_CERT_IMG} .
	@docker push ${FRONT_CERT_IMG}

package-storybook:
	@docker build --build-arg CI_NPM_AUTH_TOKEN=${CI_NPM_AUTH_TOKEN} --build-arg VERSION=${VERSION} --no-cache=true -f ${STORYBOOK_DOCKERFILE} -t ${STORYBOOK_IMG} .
	@docker push ${STORYBOOK_IMG}

.PHONY: help

help:
	@echo 'Commonly used make targets:'
	@echo '  docker-gateway              - Builds and publishes Docker image of Gateway'
	@echo '  docker-web                  - Builds and publishes Docker image of Web application'
	@echo '  docker-registry-certificate-web      - Builds and publishes Docker image of Registry Certificate Web'
	@echo '  package-storybook           - Packages the Storybook Docker image and publishes it'

## DEV ENVIRONMENT
include infra/docker-compose/dev-compose.mk