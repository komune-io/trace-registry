plugins {
    id("city.smartb.fixers.gradle.kotlin.jvm")
    kotlin("plugin.spring")
}

dependencies {
    api(project(":platform:f2:project-f2:project-f2-domain"))
    implementation(project(":platform:s2:project:project-api"))
    implementation(project(":platform:s2:asset:asset-api"))

    implementation(project(":platform:infra:cccev"))
    implementation(project(":platform:infra:fs"))
}
