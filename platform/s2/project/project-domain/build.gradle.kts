plugins {
	id("city.smartb.fixers.gradle.kotlin.mpp")
	kotlin("plugin.serialization")
}

dependencies {
	commonMainApi(project(":platform:s2:asset:asset-domain"))

	Dependencies.Mpp.im(::commonMainApi)
	Dependencies.Jvm.Cccev.client(::commonMainImplementation)
	Dependencies.Jvm.Test.dataFaker(::jvmTestImplementation)
	Dependencies.Mpp.documenter(::jvmTestImplementation)
}

tasks.withType<Test>().configureEach {
	useJUnitPlatform()
}
