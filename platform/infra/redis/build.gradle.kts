plugins {
	id("io.komune.fixers.gradle.kotlin.jvm")
	kotlin("plugin.spring")
	kotlin("plugin.serialization")
	kotlin("kapt")
}

dependencies {
	implementation(project(":platform:commons"))

	Dependencies.Jvm.redisOm(::api, ::kapt)
	Dependencies.Jvm.s2Sourcing(::implementation)
}
