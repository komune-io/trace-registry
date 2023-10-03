plugins {
    id("city.smartb.fixers.gradle.kotlin.jvm")
    kotlin("plugin.spring")
}

dependencies {
    api(project(":platform:f2:catalogue-f2:catalogue-f2-domain"))
    implementation(project(":platform:s2:catalogue:catalogue-api"))
}
