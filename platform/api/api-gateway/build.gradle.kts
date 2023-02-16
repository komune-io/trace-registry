plugins {
    id("org.springframework.boot")
    id("city.smartb.fixers.gradle.kotlin.jvm")
    kotlin("plugin.spring")
}

dependencies {
    Dependencies.Jvm.f2(::implementation)
    Dependencies.Jvm.redisOm(::implementation)

    implementation(project(":platform:f2:project-f2:project-f2-api"))
    implementation(project(":platform:f2:activity-f2:activity-f2-api"))
    implementation(project(":platform:f2:asset-f2:asset-f2-api"))
    implementation(project(":platform:f2:protocol-f2:protocol-f2-api"))

    implementation(project(":platform:api:api-config"))

}

tasks.withType<org.springframework.boot.gradle.tasks.bundling.BootBuildImage> {
    imageName.set("${System.getenv("IMAGE_NAME")}:${this.project.version}")
}
