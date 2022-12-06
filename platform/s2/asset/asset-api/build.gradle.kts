plugins {
	id("city.smartb.fixers.gradle.kotlin.jvm")
	kotlin("plugin.spring")
	kotlin("plugin.serialization")
}

dependencies {
	api(project(":platform:s2:asset:asset-domain"))

	Dependencies.Jvm.redisOm(::implementation)
	Dependencies.Jvm.s2StoringData(::implementation)
}
