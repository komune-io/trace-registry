plugins {
	id("io.komune.fixers.gradle.kotlin.jvm")
	kotlin("plugin.spring")
}

dependencies {
	implementation(project(Modules.api.config))
	implementation(project(Modules.control.core.cccev.api))

	implementation(project(":platform:infra:redis"))

	Dependencies.Jvm.s2Bdd(::api)
	Dependencies.Jvm.Fs.client(::implementation)
	Dependencies.Jvm.Test.dataFaker(::implementation)
}
