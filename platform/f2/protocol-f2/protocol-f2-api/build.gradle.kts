plugins {
    id("city.smartb.fixers.gradle.kotlin.jvm")
    kotlin("plugin.spring")
}

dependencies {
    api(project(":platform:f2:protocol-f2:protocol-f2-domain"))

    implementation(project(":platform:s2:protocol:protocol-api"))

    Dependencies.Jvm.fs(::implementation)
}
