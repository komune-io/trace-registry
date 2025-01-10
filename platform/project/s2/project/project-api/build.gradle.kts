plugins {
	id("io.komune.fixers.gradle.kotlin.jvm")
	kotlin("plugin.spring")
	kotlin("plugin.serialization")
	kotlin("kapt")
}

dependencies {
	api(project(":platform:project:s2:project:project-domain"))

	implementation(project(":platform:infra:redis"))

	implementation(project(":platform:api:api-commons"))

	Dependencies.Jvm.redisOm(::implementation, ::kapt)
	Dependencies.Jvm.s2SourcingSsm(::implementation)
}
