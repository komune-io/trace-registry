plugins {
	id("city.smartb.fixers.gradle.kotlin.jvm")
	kotlin("plugin.spring")
	kotlin("plugin.serialization")
}

dependencies {
	implementation(project(":platform:f2:project-f2:project-f2-client"))
	implementation(project(":platform:f2:activity-f2:activity-f2-client"))
	implementation(project(":platform:f2:asset-pool-f2:asset-pool-f2-client"))
	implementation(project(":platform:f2:asset-f2:asset-f2-client"))

	Dependencies.Mpp.Ktor.Client.logging(::implementation)
	Dependencies.Jvm.Cccev.client(::implementation)
	Dependencies.Jvm.Test.dataFaker(::implementation)
	Dependencies.Jvm.junit(::testImplementation)
}
