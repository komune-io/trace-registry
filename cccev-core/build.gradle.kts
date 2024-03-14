plugins {
	id("city.smartb.fixers.gradle.kotlin.mpp")
	id("city.smartb.fixers.gradle.publish")
	kotlin("plugin.serialization")
	kotlin("plugin.spring")
}

dependencies {
	commonMainApi(project(Modules.cccev.s2.evidenceType.domain))
	Dependencies.Mpp.fs(::commonMainApi)

	jvmMainApi(project(Modules.api.commons))
	jvmMainApi(project(Modules.cccev.dsl.model))
	jvmMainApi(project(Modules.cccev.projection.api))
	jvmMainApi(project(Modules.cccev.infra.neo4j))
}
