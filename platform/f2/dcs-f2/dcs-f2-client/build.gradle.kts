plugins {
	id("city.smartb.fixers.gradle.kotlin.mpp")
	id("city.smartb.fixers.gradle.publish")
	kotlin("plugin.serialization")
}

dependencies {
	commonMainApi(project(":platform:f2:dcs-f2:dcs-f2-domain"))

	Dependencies.Mpp.f2Client(::commonMainApi)
}
