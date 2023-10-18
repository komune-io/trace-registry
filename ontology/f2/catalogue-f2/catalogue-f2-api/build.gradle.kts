plugins {
    id("city.smartb.fixers.gradle.kotlin.jvm")
    kotlin("plugin.spring")
}

dependencies {
    api(project(":ontology:f2:catalogue-f2:catalogue-f2-domain"))

    implementation(project(":ontology:s2:catalogue:catalogue-api"))
    implementation(project(":ontology:f2:dataset-f2:dataset-f2-api"))


    implementation(project(":platform:api:api-config"))
    implementation(project(":platform:infra:fs"))
}
