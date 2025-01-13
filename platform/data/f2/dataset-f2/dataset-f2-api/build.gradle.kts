plugins {
    id("io.komune.fixers.gradle.kotlin.jvm")
    kotlin("plugin.spring")
}

dependencies {
    implementation(project(":platform:infra:fs"))

    api(project(":platform:data:f2:dataset-f2:dataset-f2-domain"))
    implementation(project(":platform:api:api-config"))
    implementation(project(":platform:data:s2:dataset:dataset-api"))
}
