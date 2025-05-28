plugins {
    id("io.komune.fixers.gradle.kotlin.jvm")
    kotlin("plugin.spring")
    kotlin("plugin.serialization")
}

dependencies {
    api(project(Modules.data.f2.catalogue.domain))
    api(project(Modules.data.f2.catalogueDraft.domain))

    implementation(project(Modules.data.f2.cccev.api))
    implementation(project(Modules.data.f2.concept.api))
    implementation(project(Modules.data.f2.dataset.api))
    implementation(project(Modules.data.f2.license.api))

    implementation(project(Modules.data.s2.catalogue.api))
    implementation(project(Modules.data.s2.catalogueDraft.api))
    implementation(project(Modules.data.s2.concept.api))
    implementation(project(Modules.data.s2.cccev.api))
    implementation(project(Modules.data.s2.dataset.api))

    implementation(project(Modules.identity.f2.organization.api))
    implementation(project(Modules.identity.f2.user.api))

    implementation(project(Modules.api.config))
    implementation(project(Modules.infra.fs))
    implementation(project(Modules.infra.postgresql))
    implementation(project(Modules.infra.svg))
}
