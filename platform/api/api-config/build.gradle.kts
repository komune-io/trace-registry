plugins {
    id("city.smartb.fixers.gradle.kotlin.jvm")
    kotlin("plugin.spring")
    kotlin("kapt")
}

dependencies {
    api("city.smartb.i2:i2-spring-boot-starter-auth-keycloak:${Versions.i2}")
    implementation(project(":platform:api:api-commons"))
    implementation("city.smartb.im:api-config:${Versions.im}")
    Dependencies.Jvm.fs(::implementation)
}
