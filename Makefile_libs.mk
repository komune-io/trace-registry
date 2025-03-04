VERSION = $(shell cat VERSION)

.PHONY: lint build

lint:
	./gradlew detekt

build:
	VERSION=${VERSION} ./gradlew build --stacktrace -x test -x jvmTest -x allTests -x jsBrowserTest

test-pre:
	@make dev-envsubst
	@make dev up
	@sleep 10
	@make init up

#test:
	#./gradlew test --info

publish:
	@echo "No publish task"

promote:
	@echo "No promote task"
