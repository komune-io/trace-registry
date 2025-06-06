plugins {
	id("io.komune.fixers.gradle.kotlin.jvm")
	kotlin("plugin.spring")
	kotlin("plugin.serialization")
	kotlin("kapt")
}

dependencies {
	api(project(Modules.data.s2.cccev.domain))
	api(project(Modules.data.s2.concept.domain))

	implementation(project(Modules.commons))
	implementation(project(Modules.infra.postgresql))
	implementation(project(Modules.infra.redis))

	Dependencies.Jvm.redisOm(::implementation, ::kapt)
	Dependencies.Jvm.s2Sourcing(::implementation)

	implementation("org.hsqldb:hsqldb:${Versions.hsqldb}")
	implementation("com.fasterxml.jackson.dataformat:jackson-dataformat-csv:${Versions.jacksonCsv}")
}
