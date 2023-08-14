plugins {
    id("city.smartb.fixers.gradle.kotlin.jvm")
    kotlin("plugin.spring")
}

dependencies {
    api(project(":platform:f2:asset-pool-f2:asset-pool-f2-domain"))
    implementation(project(":platform:s2:asset:asset-api"))

    implementation(project(":platform:infra:cccev"))

    implementation(project(":platform:infra:fs"))
    implementation(project(":platform:infra:im"))
    implementation(project(":platform:infra:pdf"))
}
