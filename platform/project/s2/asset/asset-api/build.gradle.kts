plugins {
	id("io.komune.fixers.gradle.kotlin.jvm")
	kotlin("plugin.spring")
	kotlin("plugin.serialization")
	kotlin("kapt")
}

dependencies {
	api(project(":platform:project:s2:asset:asset-domain"))

	implementation(project((":platform:infra:redis")))

	implementation(project(":platform:infra:pdf"))
	implementation(project(":platform:infra:fs"))

	implementation(project(":platform:api:api-commons"))

	Dependencies.Jvm.redisOm(::implementation, ::kapt)
	Dependencies.Jvm.s2SourcingSsm(::implementation)
}
