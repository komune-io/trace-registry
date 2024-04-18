plugins {
	id("io.komune.fixers.gradle.kotlin.mpp")
	id("io.komune.fixers.gradle.publish")
	kotlin("plugin.serialization")
}

dependencies {
//	commonMainApi(project(":platform:s2:commons"))

	commonMainApi(project(":ontology:dsl:dcat"))
}

tasks.withType<Test>().configureEach {
	useJUnitPlatform()
}