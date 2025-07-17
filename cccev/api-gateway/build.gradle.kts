plugins {
    id("org.springframework.boot")
    id("io.spring.dependency-management")
    id("city.smartb.fixers.gradle.kotlin.jvm")
    kotlin("plugin.spring")
}

dependencies {
    Dependencies.Jvm.f2Http(::api)

    implementation(project(Modules.api.commons))
    implementation(project(Modules.api.config))

    implementation(project(Modules.cccev.core))
    implementation(project(Modules.cccev.f2))
}

tasks.withType<org.springframework.boot.gradle.tasks.bundling.BootBuildImage> {
    imageName.set("smartbcity/cccev-gateway:${this.project.version}")
}
