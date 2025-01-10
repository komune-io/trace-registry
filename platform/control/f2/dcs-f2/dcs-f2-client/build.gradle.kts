plugins {
	id("io.komune.fixers.gradle.kotlin.mpp")
	id("io.komune.fixers.gradle.publish")
	kotlin("plugin.serialization")
}

dependencies {
	commonMainApi(project(":platform:control:f2:dcs-f2:dcs-f2-domain"))

	Dependencies.Mpp.f2Client(::commonMainApi)
}
