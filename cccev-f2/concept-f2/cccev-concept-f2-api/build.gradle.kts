plugins {
    id("city.smartb.fixers.gradle.kotlin.jvm")
    id("city.smartb.fixers.gradle.publish")
    kotlin("plugin.spring")
}

dependencies {
    api(project(Modules.cccev.f2.commons))
    api(project(Modules.cccev.f2.concept.domain))
    api(project(Modules.cccev.f2.evidence.api))
    api(project(Modules.cccev.f2.unit.api))
    implementation(project(Modules.cccev.core))
}
