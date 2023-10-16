plugins {
    id("city.smartb.fixers.gradle.kotlin.jvm")
    kotlin("plugin.spring")
}

dependencies {
    implementation(project(":platform:infra:fs"))

    api(project(":ontology:f2:dataset-f2:dataset-f2-domain"))
    implementation(project(":platform:api:api-config"))
    implementation(project(":ontology:s2:dataset:dataset-api"))
}
