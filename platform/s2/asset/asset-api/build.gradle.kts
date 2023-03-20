plugins {
	id("city.smartb.fixers.gradle.kotlin.jvm")
	kotlin("plugin.spring")
	kotlin("plugin.serialization")
	kotlin("kapt")
}

dependencies {
	api(project(":platform:s2:asset:asset-domain"))

	Dependencies.Jvm.redisOm(::implementation, ::kapt)
	Dependencies.Jvm.s2StoringData(::implementation)
}
