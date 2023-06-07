plugins {
	id("city.smartb.fixers.gradle.kotlin.jvm")
	kotlin("plugin.spring")
	kotlin("plugin.serialization")
	kotlin("kapt")
}

dependencies {
	Dependencies.Jvm.Spring.autoConfigure(::implementation, ::kapt)
	Dependencies.Jvm.im(::implementation)
	Dependencies.Mpp.im(::implementation)
	Dependencies.Mpp.f2Client(::implementation)
	implementation(project(":platform:api:api-commons"))
}
