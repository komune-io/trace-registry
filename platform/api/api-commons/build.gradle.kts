plugins {
    id("city.smartb.fixers.gradle.kotlin.mpp")
    kotlin("plugin.serialization")
    kotlin("plugin.spring")
    kotlin("kapt")
}

dependencies {
    Dependencies.Jvm.jackson(::jvmMainApi)
    Dependencies.Mpp.im(::commonMainApi)
    Dependencies.Mpp.s2(::commonMainApi)


    Dependencies.Jvm.f2(::jvmMainImplementation)
    Dependencies.Jvm.Fs.client(::jvmMainImplementation)
    Dependencies.Jvm.s2StoringData(::jvmMainImplementation)
    jvmMainImplementation("org.springframework.data:spring-data-commons:${Versions.springData}")
    jvmMainImplementation("city.smartb.s2:s2-spring-boot-starter-utils-logger:${Versions.s2}")
    jvmMainImplementation("city.smartb.i2:i2-spring-boot-starter-auth:${Versions.i2}")

    commonMainApi("com.ionspin.kotlin:bignum:${Versions.bignum}")
}
