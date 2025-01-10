plugins {
    id("io.komune.fixers.gradle.kotlin.mpp")
    id("io.komune.fixers.gradle.publish")
    kotlin("plugin.serialization")
}

dependencies {
    Dependencies.Mpp.im(::commonMainApi)
    Dependencies.Mpp.s2(::commonMainImplementation)
    Dependencies.Mpp.Ktor.utils(::commonMainImplementation)
    Dependencies.Mpp.bignum(::commonMainApi)

    Dependencies.Jvm.Fs.client(::jvmMainImplementation)
    Dependencies.Jvm.jackson(::jvmMainApi)
}
