plugins {
	id("io.komune.fixers.gradle.kotlin.jvm")
	kotlin("plugin.spring")
	kotlin("plugin.serialization")
	kotlin("kapt")
}

dependencies {
	api(project(":platform:s2:asset:asset-domain"))

	implementation(project((":platform:infra:redis")))

	implementation(project(":platform:infra:pdf"))
	implementation(project(":platform:infra:fs"))

	Dependencies.Jvm.redisOm(::implementation, ::kapt)
	Dependencies.Jvm.s2SourcingSsm(::implementation)
}
