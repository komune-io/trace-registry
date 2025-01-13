plugins {
    id("org.springframework.boot")
    id("io.komune.fixers.gradle.kotlin.jvm")
    kotlin("plugin.spring")
    kotlin("kapt")
}

dependencies {
    Dependencies.Jvm.f2(::implementation)
    Dependencies.Jvm.redisOm(::implementation, ::kapt)

    implementation(project(":platform:control:f2:activity-f2:activity-f2-api"))
    implementation(project(":platform:project:f2:asset-order-f2:asset-order-f2-api"))
    implementation(project(":platform:project:f2:asset-pool-f2:asset-pool-f2-api"))
    implementation(project(":platform:project:f2:chat-f2:chat-f2-api"))
    implementation(project(":platform:control:f2:dcs-f2:dcs-f2-api"))
    implementation(project(":platform:project:f2:project-f2:project-f2-api"))

    implementation(project(":platform:data:f2:catalogue-f2:catalogue-f2-api"))
    implementation(project(":platform:data:f2:dataset-f2:dataset-f2-api"))

    implementation(project(":platform:api:api-config"))
    implementation("org.springframework.boot:spring-boot-starter-webflux:${Versions.springBoot}")
}
