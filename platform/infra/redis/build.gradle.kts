plugins {
	id("city.smartb.fixers.gradle.kotlin.jvm")
	kotlin("plugin.spring")
	kotlin("plugin.serialization")
	kotlin("kapt")
}

dependencies {
	implementation(project(":platform:api:api-commons"))
	implementation(project(":platform:s2:commons"))

	Dependencies.Jvm.redisOm(::api, ::kapt)
}
