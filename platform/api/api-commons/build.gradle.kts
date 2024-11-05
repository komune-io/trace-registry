plugins {
    id("io.komune.fixers.gradle.kotlin.mpp")
    // TODO REMOVE THIS PLUBLICATION OR MOVE IT IN ANOHTER PACKAGE NAME.
    id("io.komune.fixers.gradle.publish")
    kotlin("plugin.serialization")
    kotlin("plugin.spring")
    kotlin("kapt")
}

dependencies {
    Dependencies.Mpp.im(::commonMainApi)
    Dependencies.Jvm.jackson(::jvmMainApi)
    Dependencies.Mpp.s2(::commonMainApi)
    Dependencies.Jvm.f2(::jvmMainImplementation)
    Dependencies.Jvm.f2Auth(::jvmMainApi)
    Dependencies.Jvm.Fs.client(::jvmMainImplementation)
    jvmMainImplementation("org.springframework.data:spring-data-commons:${Versions.springData}")
    jvmMainImplementation("io.komune.s2:s2-spring-boot-starter-utils-logger:${Versions.s2}")
    jvmMainApi("io.komune.f2:f2-spring-boot-exception-http:${Versions.f2}")

}
