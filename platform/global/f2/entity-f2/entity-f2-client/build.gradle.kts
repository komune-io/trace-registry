plugins {
	id("io.komune.fixers.gradle.kotlin.mpp")
	id("io.komune.fixers.gradle.publish")
	kotlin("plugin.serialization")
}

dependencies {
	commonMainApi(project(Modules.global.f2.entity.domain))

	Dependencies.Mpp.f2(::commonMainApi)
	Dependencies.Mpp.f2Client(::commonMainApi)
}
