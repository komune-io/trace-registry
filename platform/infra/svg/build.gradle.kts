plugins {
	id("io.komune.fixers.gradle.kotlin.jvm")
	kotlin("plugin.spring")
	kotlin("plugin.serialization")
	kotlin("kapt")
}

dependencies {
	Dependencies.Jvm.Spring.autoConfigure(::implementation, ::kapt)
	implementation(project(":platform:commons"))

	Dependencies.Mpp.svg(::implementation)
	Dependencies.Mpp.qrcode(::implementation)
}
