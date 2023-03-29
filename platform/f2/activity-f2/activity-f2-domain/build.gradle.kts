plugins {
	id("city.smartb.fixers.gradle.kotlin.mpp")
	kotlin("plugin.serialization")
}

dependencies {
	Dependencies.Mpp.f2 { commonMainApi(it) }
	commonMainApi(project(":platform:api:api-commons"))
//	commonMainApi(project(":platform:s2:activity:activity-domain"))
}
