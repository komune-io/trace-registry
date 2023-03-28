plugins {
	id("city.smartb.fixers.gradle.kotlin.jvm")
	kotlin("plugin.spring")
}

dependencies {
	implementation(project(":platform:f2:project-f2:project-f2-api"))
	implementation(project(":platform:s2:project:project-api"))

	implementation(project(":platform:infra:redis"))
	Dependencies.Jvm.s2Bdd(::api)
}
