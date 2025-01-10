plugins {
    id("io.komune.fixers.gradle.kotlin.jvm")
    kotlin("plugin.spring")
}

dependencies {
    api(project(":platform:control:f2:activity-f2:activity-f2-domain"))
    implementation(project(":platform:s2:project:project-api"))

    implementation(project(":platform:api:api-config"))

    implementation(project(":platform:infra:cccev"))
    implementation(project(":platform:infra:fs"))
}
