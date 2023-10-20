plugins {
	id("city.smartb.fixers.gradle.kotlin.mpp")
	id("city.smartb.fixers.gradle.publish")
	kotlin("plugin.serialization")
}

dependencies {
	commonMainApi(project(":ontology:dsl:dcat"))
	commonMainApi(project(":ontology:dsl:structure"))
}

tasks.withType<Test>().configureEach {
	useJUnitPlatform()
}