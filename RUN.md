

## Config
* Config hosts `/etc/hosts`
```
127.0.0.1       keycloak-it
```

## Dependencies

* Start Dockers

```bash
make dev up
```

## App

* Run Gateway Api

```
./gradlew :platform:api:api-gateway:bootRun -Dspring.profiles.active=local
```

* Run Init

```
./gradlew :platform:script:script-gateway:bootRun -Dspring.profiles.active=local
```

* Run Web Plateform

```bash
cd platform/web/packages/web-platform; yarn start
```

* Run Web Certificate

```bash
cd platform/web/packages/web-certificate; yarn start
```

### Keycloak Config

In `platform-web` client, the mapper `memberOf` need to be added:
* Name: memberOf
* Mapper Type: User Attribute
* User Attribute: memberOf
* Token Claim Name: memberOf
* Claim JSON Type: String