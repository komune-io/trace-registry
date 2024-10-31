VERSION = $(shell cat VERSION)

.PHONY: lint build

lint:
	./gradlew detekt

build:
	VERSION=${VERSION} ./gradlew build publishToMavenLocal --stacktrace -x test -x jvmTest -x allTests -x jsBrowserTest

test-pre:
	sudo echo "127.0.0.1 ca.bc-coop.bclan" | sudo tee -a /etc/hosts
	sudo echo "127.0.0.1 peer0.bc-coop.bclan" | sudo tee -a /etc/hosts
	sudo echo "127.0.0.1 orderer.bclan" | sudo tee -a /etc/hosts
	@make dev pull
	@make dev up
	@make dev c2-sandbox-ssm logs
	@make dev up
	@make dev c2-sandbox-ssm logs

test:
	./gradlew test

publish:
	@echo "No publish task"

promote:
	@echo "No promote task"
