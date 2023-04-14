plugins {
    id("org.springframework.boot")
    id("city.smartb.fixers.gradle.kotlin.jvm")
    kotlin("plugin.spring")
}

dependencies {
    Dependencies.Jvm.f2(::implementation)
    implementation(project(":platform:api:api-config"))

    implementation(project(":platform:s2:asset:asset-api"))
    implementation(project(":platform:s2:project:project-api"))

    implementation("city.smartb.s2:s2-spring-boot-starter-utils-logger:${Versions.s2}")

    Dependencies.Jvm.s2Bdd(::testImplementation)
    Dependencies.Mpp.documenter(::testImplementation)
}

tasks.withType<org.springframework.boot.gradle.tasks.bundling.BootBuildImage> {
    imageName.set("${System.getenv("IMAGE_NAME")}:${this.project.version}")
}

tasks.withType<Test>().configureEach {
    useJUnitPlatform()
}
