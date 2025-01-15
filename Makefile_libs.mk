VERSION = $(shell cat VERSION)

.PHONY: lint build

lint:
	./gradlew detekt

build:
	VERSION=${VERSION} ./gradlew build --stacktrace -x test -x jvmTest -x allTests -x jsBrowserTest

test-pre:
	sudo echo "127.0.0.1 ca.bc-coop.bclan" | sudo tee -a /etc/hosts
	sudo echo "127.0.0.1 peer0.bc-coop.bclan" | sudo tee -a /etc/hosts
	sudo echo "127.0.0.1 orderer.bclan" | sudo tee -a /etc/hosts
	@make dev pull
	@make dev up
	@sleep 10
	@make init up

test:
	./gradlew test --info

publish:
	@echo "No publish task"

promote:
	@echo "No promote task"
