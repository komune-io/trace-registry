plugins {
	id("io.komune.fixers.gradle.kotlin.mpp")
	id("io.komune.fixers.gradle.publish")
	kotlin("plugin.serialization")
}

dependencies {
	commonMainApi(project(":platform:f2:asset-order-f2:asset-order-f2-domain"))
	Dependencies.Mpp.f2Client(::commonMainApi)
}

tasks.withType<Test>().configureEach {
	useJUnitPlatform()
}
