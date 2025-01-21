plugins {
    id("org.springframework.boot")
    id("io.komune.fixers.gradle.kotlin.jvm")
    kotlin("plugin.spring")
    kotlin("kapt")
}

dependencies {
    Dependencies.Jvm.f2(::implementation)
    Dependencies.Jvm.redisOm(::implementation, ::kapt)

    project(":platform").dependencyProject.subprojects.forEach {
        if ("-api" in it.name) {
            implementation(it)
        }
    }

    project(":platform:infra").dependencyProject.subprojects.forEach {
        implementation(it)
    }

    implementation(project(Modules.api.config))
    implementation("org.springframework.boot:spring-boot-starter-webflux:${Versions.springBoot}")
}
