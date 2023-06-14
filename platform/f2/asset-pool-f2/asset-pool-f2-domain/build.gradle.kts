plugins {
	id("city.smartb.fixers.gradle.kotlin.mpp")
	id("city.smartb.fixers.gradle.publish")
	kotlin("plugin.serialization")
}

dependencies {
	commonMainApi(project(":platform:s2:asset:asset-domain"))
	commonMainApi(project(":platform:s2:project:project-domain"))
}
