plugins {
    id("io.komune.fixers.gradle.kotlin.jvm")
    kotlin("plugin.spring")
}

dependencies {
    api(project(":platform:control:f2:dcs-f2:dcs-f2-domain"))

    implementation(project(":platform:api:api-commons"))

    implementation(project(":platform:infra:cccev"))
    implementation(project(":platform:infra:fs"))
}
