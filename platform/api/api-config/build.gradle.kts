plugins {
    id("city.smartb.fixers.gradle.kotlin.jvm")
    kotlin("plugin.spring")
    kotlin("kapt")
}

dependencies {
    implementation(project(":platform:api:api-commons"))
    implementation("city.smartb.im:api-config:${Versions.im}")
    Dependencies.Jvm.i2Keycloack(::api)
    Dependencies.Jvm.fs(::implementation)
    Dependencies.Jvm.f2OpenApi(::implementation)
}
