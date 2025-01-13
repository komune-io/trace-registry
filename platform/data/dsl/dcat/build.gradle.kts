plugins {
	id("io.komune.fixers.gradle.kotlin.mpp")
	id("io.komune.fixers.gradle.publish")
	kotlin("plugin.serialization")
}

dependencies {
	commonMainApi(project(":platform:data:dsl:skos"))
	commonMainApi(project(":platform:data:dsl:structure"))
}

tasks.withType<Test>().configureEach {
	useJUnitPlatform()
}