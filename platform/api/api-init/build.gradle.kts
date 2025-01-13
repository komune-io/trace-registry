plugins {
    id("org.springframework.boot")
    id("io.komune.fixers.gradle.kotlin.jvm")
    kotlin("plugin.spring")
}

dependencies {
    Dependencies.Jvm.f2(::implementation)
    implementation(project(":platform:api:api-config"))

//    implementation(project(":platform:project:s2:asset:asset-api"))
    implementation(project(":platform:project:s2:project:project-api"))
    implementation(project(":platform:data:s2:catalogue:catalogue-api"))
    implementation(project(":platform:data:s2:dataset:dataset-api"))

    Dependencies.Jvm.s2Bdd(::testImplementation)
    Dependencies.Mpp.documenter(::testImplementation)
}

tasks.withType<Test>().configureEach {
    useJUnitPlatform()
}
