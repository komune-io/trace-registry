plugins {
	id("io.komune.fixers.gradle.kotlin.mpp")
	id("io.komune.fixers.gradle.publish")
	kotlin("plugin.serialization")
}

dependencies {
	commonMainApi(project(":platform:project:s2:asset:asset-domain"))
	commonMainApi(project(":platform:project:s2:project:project-domain"))
}
