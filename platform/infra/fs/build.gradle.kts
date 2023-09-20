plugins {
	id("city.smartb.fixers.gradle.kotlin.jvm")
	kotlin("plugin.spring")
	kotlin("plugin.serialization")
	kotlin("kapt")
}

dependencies {
	implementation(project(":platform:infra:im"))

	Dependencies.Jvm.Spring.autoConfigure(::implementation, ::kapt)
	Dependencies.Mpp.f2Client(::api)
	Dependencies.Jvm.Fs.client(::api)
}
