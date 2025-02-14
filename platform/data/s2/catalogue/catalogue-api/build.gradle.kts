plugins {
	id("io.komune.fixers.gradle.kotlin.jvm")
	kotlin("plugin.spring")
	kotlin("plugin.serialization")
	kotlin("kapt")
}

dependencies {
	api(project(Modules.data.s2.catalogue.domain))
	api(project(Modules.data.s2.concept.domain))

	implementation(project(Modules.commons))
	implementation(project(Modules.infra.meilisearch))
	implementation(project(Modules.infra.postgresql))
	implementation(project(Modules.infra.redis))

	implementation(project(Modules.api.config))

	Dependencies.Jvm.redisOm(::implementation, ::kapt)
	Dependencies.Jvm.s2Sourcing(::implementation)



}
