plugins {
	id("city.smartb.fixers.gradle.kotlin.mpp")
	id("city.smartb.fixers.gradle.publish")
	kotlin("plugin.serialization")
}

dependencies {
	commonMainApi(project(":ontology:f2:dataset-f2:dataset-f2-domain"))

	Dependencies.Mpp.f2(::commonMainApi)
	Dependencies.Mpp.f2Client(::commonMainApi)
}
