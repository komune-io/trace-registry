plugins {
	id("io.komune.fixers.gradle.kotlin.jvm")
	kotlin("plugin.spring")
	kotlin("plugin.serialization")
	kotlin("kapt")
}

dependencies {
	api(project(":platform:project:s2:order:order-domain"))

	implementation(project((":platform:infra:redis")))

//	Dependencies.Mpp.f2(::implementation)
	implementation(project(":platform:commons"))

	Dependencies.Jvm.redisOm(::implementation, ::kapt)
	Dependencies.Jvm.s2Sourcing(::implementation)
}
