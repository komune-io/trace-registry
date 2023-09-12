plugins {
    id("city.smartb.fixers.gradle.kotlin.jvm")
    kotlin("plugin.spring")
    kotlin("kapt")
}

dependencies {
    implementation(project(":platform:api:api-commons"))
    Dependencies.Jvm.f2Auth(::api)
    Dependencies.Jvm.f2OpenApi(::implementation)
}
