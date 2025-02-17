plugins {
	id("io.komune.fixers.gradle.kotlin.jvm")
	kotlin("plugin.spring")
	kotlin("plugin.serialization")
	kotlin("kapt")
}

dependencies {
	implementation(project(Modules.commons))

	Dependencies.Jvm.s2Sourcing(::implementation)
}
