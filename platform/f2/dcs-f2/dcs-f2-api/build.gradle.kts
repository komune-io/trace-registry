plugins {
    id("io.komune.fixers.gradle.kotlin.jvm")
    kotlin("plugin.spring")
}

dependencies {
    api(project(":platform:f2:dcs-f2:dcs-f2-domain"))
    implementation(project(":platform:infra:cccev"))
    implementation(project(":platform:infra:fs"))
}
