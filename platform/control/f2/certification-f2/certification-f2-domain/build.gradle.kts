plugins {
	id("io.komune.fixers.gradle.kotlin.mpp")
	id("io.komune.fixers.gradle.publish")
	kotlin("plugin.serialization")
}

dependencies {
	commonMainApi(project(Modules.control.core.cccev.domain))

	commonMainApi(project(Modules.control.f2.protocol.domain))

	Dependencies.Mpp.f2 { commonMainApi(it) }
	Dependencies.Mpp.fs { commonMainApi(it) }
}
