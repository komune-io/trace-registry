plugins {
	id("city.smartb.fixers.gradle.kotlin.jvm")
	kotlin("plugin.serialization")
	kotlin("kapt")
}

dependencies {
	implementation(project(":platform:f2:project-f2:project-f2-client"))
	implementation(project(":platform:f2:activity-f2:activity-f2-client"))
	implementation(project(":platform:f2:asset-pool-f2:asset-pool-f2-client"))
	implementation(project(":platform:f2:asset-order-f2:asset-order-f2-client"))

	Dependencies.Jvm.im(::implementation)
	Dependencies.Jvm.Spring.autoConfigure(::implementation, ::kapt)

	Dependencies.Mpp.Ktor.Client.logging(::implementation)
	Dependencies.Jvm.Cccev.client(::implementation)
	Dependencies.Jvm.Test.dataFaker(::implementation)
	Dependencies.Jvm.junit(::testImplementation)

}
