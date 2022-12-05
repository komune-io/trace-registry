plugins {
	id("city.smartb.fixers.gradle.kotlin.jvm")
	kotlin("plugin.spring")
	kotlin("plugin.serialization")
}

dependencies {
//	api(project(":platform:s2:generics:generics-domain"))
	api(project(":platform:s2:notification:notification-domain"))
	api(project(":platform:s2:project:project-domain"))

	Dependencies.Mpp.im(::implementation)
	Dependencies.Jvm.s2StoringData(::implementation)
}
