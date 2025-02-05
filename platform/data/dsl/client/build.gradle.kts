plugins {
    id("io.komune.fixers.gradle.kotlin.mpp")
    id("io.komune.fixers.gradle.publish")
}

dependencies {
    commonMainApi(project(Modules.data.f2.catalogue.client))
    commonMainApi(project(Modules.data.f2.concept.client))
    commonMainApi(project(Modules.data.f2.dataset.client))
}

tasks.withType<Test>().configureEach {
    useJUnitPlatform()
}
