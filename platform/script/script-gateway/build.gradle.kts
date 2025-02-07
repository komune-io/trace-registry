plugins {
    id("org.springframework.boot")
    id("io.komune.fixers.gradle.kotlin.jvm")
    kotlin("plugin.spring")
}

dependencies {
    implementation(project(Modules.script.import))
    implementation(project(Modules.script.init))

    Dependencies.Jvm.f2(::implementation)
}
