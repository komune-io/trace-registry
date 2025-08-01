plugins {
	id("io.komune.fixers.gradle.kotlin.mpp")
	id("io.komune.fixers.gradle.publish")
	kotlin("plugin.serialization")
}

dependencies {
	commonMainApi(project(":platform:commons"))

	Dependencies.Mpp.cccevDomain(::commonMainApi)
	Dependencies.Mpp.im(::commonMainApi)
	Dependencies.Mpp.documenter(::jvmTestImplementation)
	Dependencies.Mpp.fs(::commonMainApi)
	Dependencies.Mpp.s2(::commonMainApi)
}

tasks.withType<Test>().configureEach {
	useJUnitPlatform()
}
