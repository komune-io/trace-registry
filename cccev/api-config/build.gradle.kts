plugins {
    id("city.smartb.fixers.gradle.kotlin.jvm")
    kotlin("plugin.spring")
}

dependencies {
    implementation(project(Modules.api.commons))
    implementation(project(Modules.cccev.infra.fs))
}
