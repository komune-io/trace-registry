plugins {
    id("city.smartb.fixers.gradle.kotlin.mpp")
    id("city.smartb.fixers.gradle.publish")
}

dependencies {
    commonMainApi(project(Modules.cccev.client))
    commonMainApi(project(Modules.cccev.dsl.model))

    jvmMainApi(project(Modules.cccev.f2))
}

tasks.withType<Test>().configureEach {
    useJUnitPlatform()
}
