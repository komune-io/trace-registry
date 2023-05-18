plugins {
	id("city.smartb.fixers.gradle.kotlin.mpp")
	id("city.smartb.fixers.gradle.publish")
	kotlin("plugin.serialization")
}

dependencies {
	commonMainImplementation("io.ktor:ktor-client-auth:${Versions.ktor}")
	commonMainApi(project(":platform:f2:project-f2:project-f2-domain"))
	Dependencies.Mpp.f2Client(::commonMainApi)
	Dependencies.Jvm.Test.dataFaker(::jvmTestImplementation)
}

tasks.withType<Test>().configureEach {
	useJUnitPlatform()
}
