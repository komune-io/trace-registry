plugins {
	id("city.smartb.fixers.gradle.kotlin.mpp")
	kotlin("plugin.serialization")
}

dependencies {
	Dependencies.Mpp.im(::commonMainApi)
}

tasks.withType<Test>().configureEach {
	useJUnitPlatform()
}