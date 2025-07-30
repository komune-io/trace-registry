plugins {
    id("io.komune.fixers.gradle.kotlin.jvm")
    kotlin("plugin.spring")
}

dependencies {
    api(project(":platform:control:f2:activity-f2:activity-f2-domain"))
    implementation(project(":platform:project:s2:project:project-api"))

    implementation(project(":platform:api:api-config"))

//    implementation(project(":platform:control:infra:cccev"))
    implementation(project(":platform:infra:fs"))
}
