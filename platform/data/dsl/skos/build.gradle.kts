plugins {
	id("io.komune.fixers.gradle.kotlin.mpp")
	id("io.komune.fixers.gradle.publish")
	kotlin("plugin.serialization")
}

dependencies {
	commonMainApi(project(":platform:commons"))

	Dependencies.Mpp.im(::commonMainApi)
}

tasks.withType<Test>().configureEach {
	useJUnitPlatform()
}
