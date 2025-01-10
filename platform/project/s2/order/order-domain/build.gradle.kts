plugins {
	id("io.komune.fixers.gradle.kotlin.mpp")
	id("io.komune.fixers.gradle.publish")
	kotlin("plugin.serialization")
}

dependencies {
	commonMainApi(project(":platform:project:s2:asset:asset-domain"))
	commonMainApi(project(":platform:commons"))

	Dependencies.Mpp.cccevDomain(::commonMainApi)
	Dependencies.Mpp.im(::commonMainApi)
	Dependencies.Mpp.documenter(::jvmTestImplementation)
}

tasks.withType<Test>().configureEach {
	useJUnitPlatform()
}