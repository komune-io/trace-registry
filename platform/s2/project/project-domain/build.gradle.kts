plugins {
	id("io.komune.fixers.gradle.kotlin.mpp")
	id("io.komune.fixers.gradle.publish")
	kotlin("plugin.serialization")
}

dependencies {
	commonMainApi(project(":platform:s2:asset:asset-domain"))
	commonMainApi(project(":platform:s2:commons"))

	Dependencies.Mpp.im(::commonMainApi)
	Dependencies.Jvm.Cccev.client(::commonMainImplementation)
	Dependencies.Jvm.Test.dataFaker(::jvmTestImplementation)
	Dependencies.Mpp.documenter(::jvmTestImplementation)
}

tasks.withType<Test>().configureEach {
	useJUnitPlatform()
}
