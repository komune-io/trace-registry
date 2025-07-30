plugins {
    id("io.komune.fixers.gradle.kotlin.jvm")
    kotlin("plugin.spring")
    kotlin("plugin.serialization")
}

dependencies {
    api(project(Modules.control.f2.protocol.domain))

    implementation(project(Modules.commons))

    implementation(project(Modules.control.core.cccev.api))
    implementation(project(Modules.infra.fs))
}
