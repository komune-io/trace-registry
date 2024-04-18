plugins {
	id("io.komune.fixers.gradle.kotlin.mpp")
	id("io.komune.fixers.gradle.publish")
	kotlin("plugin.serialization")
}

dependencies {
	commonMainImplementation("io.ktor:ktor-client-auth:${Versions.ktor}")
	commonMainApi(project(":platform:f2:asset-pool-f2:asset-pool-f2-domain"))
	Dependencies.Mpp.f2Client(::commonMainApi)
}

tasks.withType<Test>().configureEach {
	useJUnitPlatform()
}
