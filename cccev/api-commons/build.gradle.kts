plugins {
    id("city.smartb.fixers.gradle.kotlin.mpp")
    id("city.smartb.fixers.gradle.publish")
}

dependencies {
    Dependencies.Jvm.coroutines(::jvmMainApi)
    Dependencies.Jvm.f2(::jvmMainApi)
    Dependencies.Jvm.s2Logger(::jvmMainApi)

    Dependencies.Jvm.Spring.tx(::jvmMainApi)
}
