plugins {
    id("city.smartb.fixers.gradle.kotlin.mpp")
    id("city.smartb.fixers.gradle.publish")
    kotlin("plugin.spring")
    kotlin("plugin.serialization")
}

dependencies {
    commonMainApi(project(Modules.cccev.f2.concept.domain))
    commonMainApi(project(Modules.cccev.f2.evidence.domain))
    commonMainApi("io.ktor:ktor-http:2.2.4")

    Dependencies.Mpp.fs(::commonMainApi)
}
