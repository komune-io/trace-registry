plugins {
	id("city.smartb.fixers.gradle.kotlin.mpp")
	kotlin("plugin.serialization")
}

dependencies {
	commonMainApi(project(":platform:f2:asset-pool-f2:asset-pool-f2-domain"))
	commonMainApi(project(":platform:s2:asset:asset-domain"))
	commonMainApi(project(":platform:s2:project:project-domain"))
}
