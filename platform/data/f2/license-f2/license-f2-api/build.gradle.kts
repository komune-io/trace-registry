plugins {
    id("io.komune.fixers.gradle.kotlin.jvm")
    kotlin("plugin.spring")
}

dependencies {
    api(project(Modules.data.f2.license.domain))

    implementation(project(Modules.data.s2.license.api))

    implementation(project(Modules.api.config))
    implementation(project(Modules.infra.fs))
    implementation(project(Modules.infra.postgresql))
}
