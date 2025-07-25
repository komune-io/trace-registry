plugins {
	id("io.komune.fixers.gradle.kotlin.mpp")
	id("io.komune.fixers.gradle.publish")
	kotlin("plugin.serialization")
}

dependencies {
	commonMainApi(project(Modules.commons))

	Dependencies.Jvm.junit(::jvmTestImplementation)
}

tasks.jvmTest {
	useJUnitPlatform()
}
