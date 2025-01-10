plugins {
    id("io.komune.fixers.gradle.kotlin.mpp")
    id("io.komune.fixers.gradle.publish")
    kotlin("plugin.serialization")
}

dependencies {
    Dependencies.Mpp.bignum(::commonMainApi)
    Dependencies.Mpp.s2(::commonMainImplementation)
}
