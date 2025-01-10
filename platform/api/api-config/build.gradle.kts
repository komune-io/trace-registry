plugins {
    id("io.komune.fixers.gradle.kotlin.jvm")
    kotlin("plugin.spring")
    kotlin("kapt")
}

dependencies {
    api(project(":platform:api:api-commons"))
    implementation(project(":platform:commons"))
    Dependencies.Jvm.f2Auth(::api)
    Dependencies.Jvm.f2OpenApi(::implementation)
}
