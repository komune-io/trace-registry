plugins {
    id("io.komune.fixers.gradle.kotlin.jvm")
    kotlin("plugin.spring")
}

dependencies {
    api(project(Modules.data.f2.dataset.domain))

    api(project(Modules.data.s2.dataset.api))

    implementation(project(Modules.api.config))
    implementation(project(Modules.infra.fs))
}
