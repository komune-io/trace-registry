plugins {
    id("org.springframework.boot")
    id("city.smartb.fixers.gradle.kotlin.jvm")
    kotlin("plugin.spring")
}

dependencies {
    Dependencies.Jvm.f2(::implementation)
    Dependencies.Jvm.fs(::implementation)

    implementation(project(":platform:api:api-config"))

    implementation(project(":platform:s2:project:project-api"))

    implementation("city.smartb.s2:s2-spring-boot-starter-utils-logger:${Versions.s2}")
}

tasks.withType<org.springframework.boot.gradle.tasks.bundling.BootBuildImage> {
    imageName = "${System.getenv("IMAGE_NAME")}:${this.project.version}"
}
