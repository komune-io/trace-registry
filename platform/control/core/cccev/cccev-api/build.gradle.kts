plugins {
	id("io.komune.fixers.gradle.kotlin.jvm")
	kotlin("plugin.spring")
	kotlin("plugin.serialization")
	kotlin("kapt")
}

dependencies {
	api(project(Modules.control.core.cccev.domain))

	implementation(project(Modules.commons))

	implementation(project(Modules.infra.fs))
	api(project(Modules.infra.neo4j))
}
