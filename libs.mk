.PHONY: lint build

lint:
	./gradlew detekt

build:
	VERSION=${VERSION} ./gradlew build publishToMavenLocal publish --stacktrace -x test -x jvmTest -x allTests -x jsBrowserTest

publish:
	@echo "No publish task"

promote:
	@echo "No promote task"
