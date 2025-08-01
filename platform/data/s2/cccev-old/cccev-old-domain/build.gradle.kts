plugins {
	id("io.komune.fixers.gradle.kotlin.mpp")
	id("io.komune.fixers.gradle.publish")
	kotlin("plugin.serialization")
}

dependencies {
	commonMainApi(project(Modules.commons))

	commonMainApi(project(Modules.data.s2.concept.domain))

	Dependencies.Mpp.s2(::commonMainApi)
}
