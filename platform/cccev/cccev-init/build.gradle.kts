plugins {
	id("city.smartb.fixers.gradle.kotlin.jvm")
	kotlin("plugin.spring")
	kotlin("plugin.serialization")
}

dependencies {
	implementation("com.fasterxml.jackson.module:jackson-module-kotlin:${Versions.jacksonKotlin}")
	Dependencies.Jvm.cccev(::implementation)
}
