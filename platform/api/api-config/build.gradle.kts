plugins {
    id("io.komune.fixers.gradle.kotlin.jvm")
    kotlin("plugin.spring")
    kotlin("kapt")
}

dependencies {
    implementation(project(Modules.commons))
    Dependencies.Jvm.f2Auth(::api)
    Dependencies.Jvm.f2OpenApi(::implementation)

   Dependencies.Jvm.s2Sourcing(::api)
}
