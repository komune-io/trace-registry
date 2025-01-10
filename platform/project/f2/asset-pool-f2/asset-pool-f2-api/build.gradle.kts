plugins {
    id("io.komune.fixers.gradle.kotlin.jvm")
    kotlin("plugin.spring")
}

dependencies {
    api(project(":platform:project:f2:asset-pool-f2:asset-pool-f2-domain"))

    implementation(project(":platform:project:s2:asset:asset-api"))
    implementation(project(":platform:project:s2:project:project-api"))

    implementation(project(":platform:commons"))

    implementation(project(":platform:infra:fs"))
    implementation(project(":platform:infra:im"))
}
