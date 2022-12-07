GATEWAY_NAME	   	:= smartbcity/registry-program-ver-gateway
GATEWAY_IMG	    	:= ${GATEWAY_NAME}:${VERSION}
GATEWAY_PACKAGE	   	:= platform:api:api-gateway

STORYBOOK_DOCKERFILE	:= infra/docker/storybook/Dockerfile
STORYBOOK_NAME	   	 	:= smartbcity/registry-program-ver-storybook
STORYBOOK_IMG	    	:= ${STORYBOOK_NAME}:${VERSION}

package: package-gateway
docs: package-storybook

package-gateway:
	VERSION=${VERSION} IMAGE_NAME=${GATEWAY_NAME} ./gradlew build ${GATEWAY_PACKAGE}:bootBuildImage -x test
	@docker push ${GATEWAY_IMG}

package-storybook:
	@docker build --no-cache=true -f ${STORYBOOK_DOCKERFILE} -t ${STORYBOOK_IMG} .
	@docker push ${STORYBOOK_IMG}
