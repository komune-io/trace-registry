plugins {
    id("io.komune.fixers.gradle.kotlin.jvm")
    kotlin("plugin.spring")
    kotlin("plugin.serialization")
}

dependencies {
    api(project(Modules.control.f2.certification.domain))

    implementation(project(Modules.control.f2.protocol.api))

    implementation(project(Modules.control.core.cccev.api))

    implementation(project(Modules.commons))
    implementation(project(Modules.infra.fs))
}
