plugins {
    id("org.springframework.boot")
    id("io.komune.fixers.gradle.kotlin.jvm")
    kotlin("plugin.spring")
}

dependencies {
    implementation(project(Modules.data.dsl.client))

    implementation(project(Modules.script.commons))
    implementation(project(Modules.script.import))
    implementation(project(Modules.script.init))
    implementation(project(Modules.script.update))

    Dependencies.Jvm.f2(::implementation)
    Dependencies.Jvm.im(::implementation)
}
