plugins {
	id("io.komune.fixers.gradle.kotlin.mpp")
	id("io.komune.fixers.gradle.publish")
	kotlin("plugin.serialization")
}

dependencies {
	commonMainApi(project(":platform:data:f2:catalogue-f2:catalogue-f2-domain"))

	Dependencies.Mpp.f2(::commonMainApi)
	Dependencies.Mpp.f2Client(::commonMainApi)
}
