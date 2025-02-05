plugins {
	id("io.komune.fixers.gradle.kotlin.mpp")
	id("io.komune.fixers.gradle.publish")
	kotlin("plugin.serialization")
}

dependencies {
	commonMainApi(project(Modules.data.s2.concept.domain))

	commonMainApi(project(Modules.data.dsl.dcat))
	commonMainApi(project(Modules.data.dsl.structure))
}
