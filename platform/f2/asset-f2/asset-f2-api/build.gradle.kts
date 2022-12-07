plugins {
    id("city.smartb.fixers.gradle.kotlin.jvm")
    kotlin("plugin.spring")
}

dependencies {
    api(project(":platform:f2:asset-f2:asset-f2-domain"))

    api(project(":platform:s2:asset:asset-api"))

    Dependencies.Jvm.fs(::implementation)
}
