plugins {
    id("io.komune.fixers.gradle.kotlin.jvm")
    kotlin("plugin.spring")
}

dependencies {
    api(project(Modules.data.f2.cccev.domain))

    implementation(project(Modules.data.s2.catalogue.api))
    implementation(project(Modules.data.s2.dataset.api))
    implementation(project(Modules.data.s2.cccev.api))

    implementation(project(Modules.api.config))
    implementation(project(Modules.infra.fs))
    implementation(project(Modules.infra.postgresql))
}
