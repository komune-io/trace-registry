plugins {
    id("io.komune.fixers.gradle.kotlin.jvm")
    kotlin("plugin.spring")
}

dependencies {
    api(project(":platform:project:f2:asset-order-f2:asset-order-f2-domain"))

    implementation(project(":platform:project:s2:asset:asset-api"))
    implementation(project(":platform:project:s2:order:order-api"))

    implementation(project(":platform:commons"))

    implementation(project(":platform:infra:fs"))
}
