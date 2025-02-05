plugins {
    id("io.komune.fixers.gradle.kotlin.mpp")
    id("io.komune.fixers.gradle.publish")
}

dependencies {
    project(":platform:data").dependencyProject.subprojects.forEach {
        if ("-client" in it.name) {
            commonMainApi(it)
        }
    }
}

tasks.withType<Test>().configureEach {
    useJUnitPlatform()
}
