
# Start

* Start Docker
```
make dev-up
```

* Start API
```
./gradlew build platform:api:api-gateway:bootRun -x test
```

* Start web
```
cd platform/web/packages/web-app/
yarn install
yarn start
```