plugins {
	id("city.smartb.fixers.gradle.kotlin.mpp")
	id("city.smartb.fixers.gradle.publish")
	kotlin("plugin.serialization")
}

dependencies {
	commonMainImplementation("io.ktor:ktor-client-auth:${Versions.ktor}")
	commonMainApi(project(":platform:f2:asset-f2:asset-f2-domain"))
	Dependencies.Mpp.f2Client(::commonMainApi)
}

tasks.withType<Test>().configureEach {
	useJUnitPlatform()
}
