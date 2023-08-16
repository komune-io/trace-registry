plugins {
    id("city.smartb.fixers.gradle.kotlin.jvm")
    kotlin("plugin.spring")
}

dependencies {
    api(project(":platform:f2:asset-order-f2:asset-order-f2-domain"))

    implementation(project(":platform:s2:asset:asset-api"))
    implementation(project(":platform:s2:order:order-api"))

    implementation(project(":platform:infra:fs"))
}
