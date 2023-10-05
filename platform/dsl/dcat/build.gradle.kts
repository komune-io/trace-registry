plugins {
	id("city.smartb.fixers.gradle.kotlin.mpp")
	id("city.smartb.fixers.gradle.publish")
	kotlin("plugin.serialization")
}

dependencies {
	commonMainApi(project(":platform:dsl:skos"))
}

tasks.withType<Test>().configureEach {
	useJUnitPlatform()
}