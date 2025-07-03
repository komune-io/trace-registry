plugins {
    id("io.komune.fixers.gradle.kotlin.jvm")
    kotlin("plugin.spring")
}

dependencies {
    api(project(Modules.identity.f2.user.domain))

    implementation(project(Modules.api.config))
    implementation(project(Modules.commons))

    implementation(project(Modules.infra.brevo))
    implementation(project(Modules.infra.im))
    implementation(project(Modules.infra.slack))
}
