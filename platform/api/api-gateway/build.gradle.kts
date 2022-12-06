plugins {
    id("org.springframework.boot")
    id("city.smartb.fixers.gradle.kotlin.jvm")
    kotlin("plugin.spring")
}

dependencies {
    Dependencies.Jvm.f2(::implementation)
    Dependencies.Jvm.redisOm(::implementation)

    implementation(project(":platform:f2:project-f2:project-f2-api"))
//    implementation(project(":platform:f2:task-f2:task-f2-api"))

//    implementation(project(":platform:s2:notification:notification-tasks"))
//    implementation(project(":platform:s2:project:project-tasks"))
//    implementation(project(":platform:s2:task:task-tasks"))

    implementation(project(":platform:api:api-config"))

}

tasks.withType<org.springframework.boot.gradle.tasks.bundling.BootBuildImage> {
    imageName = "${System.getenv("IMAGE_NAME")}:${this.project.version}"
}
