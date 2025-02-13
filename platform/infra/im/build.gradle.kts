plugins {
	id("io.komune.fixers.gradle.kotlin.jvm")
	kotlin("plugin.spring")
	kotlin("plugin.serialization")
	kotlin("kapt")
}

dependencies {
	Dependencies.Jvm.Spring.autoConfigure(::implementation, ::kapt)
	Dependencies.Jvm.im(::api)
	Dependencies.Mpp.im(::api)
	Dependencies.Mpp.f2Client(::implementation)
	implementation(project(":platform:commons"))
}
