plugins {
    id("city.smartb.fixers.gradle.kotlin.jvm")
    kotlin("plugin.spring")
}

dependencies {
    Dependencies.Jvm.Fs.client(::implementation)
    api(project(":platform:f2:chat-f2:chat-f2-domain"))

    implementation(project(":platform:s2:project:project-api"))

    implementation(project(":platform:infra:cccev"))
    implementation(project(":platform:infra:fs"))
}
