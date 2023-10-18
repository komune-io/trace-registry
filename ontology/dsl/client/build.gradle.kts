plugins {
    id("city.smartb.fixers.gradle.kotlin.mpp")
    id("city.smartb.fixers.gradle.publish")
}

dependencies {
    commonMainApi(project(":ontology:f2:catalogue-f2:catalogue-f2-client"))
    commonMainApi(project(":ontology:f2:dataset-f2:dataset-f2-client"))
}

tasks.withType<Test>().configureEach {
    useJUnitPlatform()
}
