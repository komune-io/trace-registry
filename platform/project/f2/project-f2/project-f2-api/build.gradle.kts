plugins {
    id("io.komune.fixers.gradle.kotlin.jvm")
    kotlin("plugin.spring")
}

dependencies {
    api(project(":platform:project:f2:project-f2:project-f2-domain"))
    implementation(project(":platform:project:s2:project:project-api"))
    implementation(project(":platform:project:s2:asset:asset-api"))

    implementation(project(":platform:api:api-commons"))

    implementation(project(":platform:infra:fs"))
}
