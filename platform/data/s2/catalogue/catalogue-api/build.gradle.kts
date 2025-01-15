plugins {
	id("io.komune.fixers.gradle.kotlin.jvm")
	kotlin("plugin.spring")
	kotlin("plugin.serialization")
	kotlin("kapt")
}

dependencies {
	api(project(":platform:data:s2:catalogue:catalogue-domain"))

	implementation(project(":platform:commons"))
	implementation(project((":platform:infra:redis")))

	Dependencies.Jvm.redisOm(::implementation, ::kapt)
	Dependencies.Jvm.s2Sourcing(::implementation)
}
