plugins {
	id("city.smartb.fixers.gradle.kotlin.mpp")
	id("city.smartb.fixers.gradle.publish")
	kotlin("plugin.serialization")
}

dependencies {
	commonMainApi(project(":platform:f2:project-f2:project-f2-domain"))

	Dependencies.Mpp.Ktor.Client.logging(::commonMainImplementation)
	Dependencies.Mpp.Ktor.Client.auth(::commonMainImplementation)

	Dependencies.Mpp.f2Client(::commonMainApi)
	Dependencies.Jvm.Test.dataFaker(::jvmTestImplementation)
}

tasks.withType<Test>().configureEach {
	useJUnitPlatform()
}
