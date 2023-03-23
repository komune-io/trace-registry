plugins {
	id("city.smartb.fixers.gradle.kotlin.mpp")
	kotlin("plugin.serialization")
}

dependencies {
	Dependencies.Mpp.im(::commonMainApi)
	Dependencies.Jvm.Test.dataFaker(::jvmTestImplementation)
	Dependencies.Mpp.documenter(::jvmTestImplementation)
}

tasks.withType<Test>().configureEach {
	useJUnitPlatform()
}
