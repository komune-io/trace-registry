plugins {
    id("org.springframework.boot")
    id("io.komune.fixers.gradle.kotlin.jvm")
    kotlin("plugin.spring")
}

dependencies {
    Dependencies.Jvm.f2(::implementation)
    implementation(project(":platform:api:api-config"))

//    implementation(project(":platform:s2:asset:asset-api"))
    implementation(project(":platform:s2:project:project-api"))

    Dependencies.Jvm.s2Bdd(::testImplementation)
    Dependencies.Mpp.documenter(::testImplementation)
}

tasks.withType<Test>().configureEach {
    useJUnitPlatform()
}
