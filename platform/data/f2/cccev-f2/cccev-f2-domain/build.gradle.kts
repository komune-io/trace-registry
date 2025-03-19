plugins {
	id("io.komune.fixers.gradle.kotlin.mpp")
	id("io.komune.fixers.gradle.publish")
	kotlin("plugin.serialization")
}

dependencies {
	commonMainApi(project(Modules.data.s2.cccev.domain))

	Dependencies.Mpp.f2(::commonMainApi)
	Dependencies.Mpp.fs(::commonMainApi)
}
