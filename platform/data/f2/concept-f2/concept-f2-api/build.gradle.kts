plugins {
    id("io.komune.fixers.gradle.kotlin.jvm")
    kotlin("plugin.spring")
}

dependencies {
    api(project(Modules.data.f2.concept.domain))

    implementation(project(Modules.data.s2.concept.api))

    implementation(project(Modules.api.config))
    implementation(project(Modules.infra.fs))
    implementation(project(Modules.infra.postgresql))
}
