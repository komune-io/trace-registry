plugins {
    id("io.komune.fixers.gradle.kotlin.jvm")
    kotlin("plugin.spring")
}

dependencies {
    api(project(Modules.data.f2.catalogue.domain))
    api(project(Modules.data.f2.catalogueDraft.domain))

    api(project(Modules.data.f2.concept.api))
    api(project(Modules.data.f2.dataset.api))
    api(project(Modules.data.f2.license.api))

    api(project(Modules.data.s2.catalogue.api))
    api(project(Modules.data.s2.catalogueDraft.api))
    api(project(Modules.data.s2.dataset.api))

    api(project(Modules.identity.f2.organization.api))
    api(project(Modules.identity.f2.user.api))

    implementation(project(Modules.api.config))
    implementation(project(Modules.infra.fs))
    implementation(project(Modules.infra.postgresql))
}
