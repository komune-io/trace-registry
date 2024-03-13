plugins {
    id("city.smartb.fixers.gradle.kotlin.mpp")
    id("city.smartb.fixers.gradle.publish")
    kotlin("plugin.spring")
    kotlin("plugin.serialization")
}

dependencies {
    commonMainApi(project(Modules.cccev.f2.certification.domain))
    commonMainApi(project(Modules.cccev.f2.concept.domain))
    commonMainApi(project(Modules.cccev.f2.evidence.domain))
    commonMainApi(project(Modules.cccev.f2.evidenceType.domain))
    commonMainApi(project(Modules.cccev.f2.framework.domain))
    commonMainApi(project(Modules.cccev.f2.requirement.domain))
    commonMainApi(project(Modules.cccev.f2.unit.domain))
}
