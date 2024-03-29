plugins {
	id("city.smartb.fixers.gradle.kotlin.mpp")
	id("city.smartb.fixers.gradle.publish")
	kotlin("plugin.serialization")
	kotlin("plugin.spring")
}

dependencies {
	Dependencies.Mpp.fs(::commonMainApi)

	jvmMainApi(project(Modules.api.commons))
	jvmMainApi(project(Modules.cccev.dsl.model))
	jvmMainApi(project(Modules.cccev.infra.neo4j))

	jvmMainImplementation(project(Modules.cccev.infra.fs))
}
