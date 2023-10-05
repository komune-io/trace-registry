plugins {
	id("city.smartb.fixers.gradle.kotlin.jvm")
	kotlin("plugin.spring")
	kotlin("plugin.serialization")
	kotlin("kapt")
}

dependencies {
	api(project(":ontology:s2:catalogue:catalogue-domain"))

	implementation(project(":platform:api:api-commons"))
	implementation(project((":platform:infra:redis")))

	Dependencies.Jvm.redisOm(::implementation, ::kapt)
	Dependencies.Jvm.s2SourcingSsm(::implementation)
}
