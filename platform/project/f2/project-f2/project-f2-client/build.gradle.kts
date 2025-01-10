plugins {
	id("io.komune.fixers.gradle.kotlin.mpp")
	id("io.komune.fixers.gradle.publish")
	kotlin("plugin.serialization")
}

dependencies {
	commonMainApi(project(":platform:project:f2:project-f2:project-f2-domain"))

	Dependencies.Mpp.f2Client(::commonMainApi)
	Dependencies.Jvm.Test.dataFaker(::jvmTestImplementation)
}

tasks.withType<Test>().configureEach {
	useJUnitPlatform()
}
