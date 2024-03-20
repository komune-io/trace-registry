plugins {
    id("city.smartb.fixers.gradle.kotlin.jvm")
    id("city.smartb.fixers.gradle.publish")
    kotlin("plugin.spring")
}

dependencies {
    api(project(Modules.cccev.f2.commons))
    api(project(Modules.cccev.f2.evidenceType.domain))
    implementation(project(Modules.cccev.core))
}
