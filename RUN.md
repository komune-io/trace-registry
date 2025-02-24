

## Config
* Config hosts `/etc/hosts`
```

echo "127.0.0.1 im-keycloak
127.0.0.1 registry.local
127.0.0.1 dashboard.registry.local
127.0.0.1 connect.registry.local
127.0.0.1 auth.registry.local
127.0.0.1 smtp.registry.local" | sudo tee -a /etc/hosts
```

## Dependencies

* Start Dockers

```bash
make dev up

```

* Init keycloak config
```bash
make init up
```

## App

* Run Gateway Api

```
./gradlew :platform:api:api-gateway:bootRun --args='--spring.profiles.active=local'
```

* Run Init

```
./gradlew :platform:script:script-gateway:bootRun --args='--spring.profiles.active=local'
```

* Configure Web App
```bash
cp platform/web/packages/web-app/public/env-config.local.js platform/web/packages/web-app/public/env-config.js
cp platform/web/packages/web-app/public/OidcTrustedDomains.local.js platform/web/packages/web-app/public/OidcTrustedDomains.js 
```

* Run Web app

```bash
cd platform/web/packages/web-platform; yarn install; yarn start
```

* Run Web Certificate

```bash
cd platform/web/packages/web-certificate; yarn install; yarn start
```
