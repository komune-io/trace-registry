plugins {
    id("io.komune.fixers.gradle.kotlin.jvm")
    kotlin("plugin.spring")
}

dependencies {
    api(project(":platform:data:f2:catalogue-f2:catalogue-f2-domain"))

    implementation(project(":platform:data:s2:catalogue:catalogue-api"))
    implementation(project(":platform:data:f2:dataset-f2:dataset-f2-api"))


    implementation(project(":platform:api:api-config"))
    implementation(project(":platform:infra:fs"))
}
