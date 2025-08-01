plugins {
    id("io.komune.fixers.gradle.kotlin.jvm")
    kotlin("plugin.spring")
}

dependencies {
    api(project(Modules.control.f2.activity.domain))
    implementation(project(Modules.project.s2.project.api))

    implementation(project(Modules.api.config))

    implementation(project(":platform:control:infra:cccev"))
    implementation(project(Modules.infra.fs))
}
