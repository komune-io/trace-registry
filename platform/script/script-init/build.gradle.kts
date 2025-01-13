plugins {
	id("io.komune.fixers.gradle.kotlin.jvm")
	id("io.komune.fixers.gradle.publish")
	kotlin("plugin.serialization")
	kotlin("kapt")
}

dependencies {
	implementation(project(":platform:data:dsl:client"))
	implementation(project(":platform:control:f2:activity-f2:activity-f2-client"))
	implementation(project(":platform:project:f2:asset-order-f2:asset-order-f2-domain"))
	implementation(project(":platform:project:f2:asset-pool-f2:asset-pool-f2-client"))
	implementation(project(":platform:data:f2:catalogue-f2:catalogue-f2-client"))
	implementation(project(":platform:project:f2:project-f2:project-f2-client"))

	Dependencies.Jvm.im(::implementation)
	Dependencies.Jvm.Spring.autoConfigure(::implementation, ::kapt)

	Dependencies.Jvm.Cccev.client(::implementation)
	Dependencies.Jvm.Test.dataFaker(::implementation)
	Dependencies.Jvm.junit(::testImplementation)

}
