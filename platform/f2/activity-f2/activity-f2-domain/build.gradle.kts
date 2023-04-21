plugins {
	id("city.smartb.fixers.gradle.kotlin.mpp")
	kotlin("plugin.serialization")
}

dependencies {
	commonMainApi(project(":platform:api:api-commons"))
	commonMainApi(project(":platform:s2:project:project-domain"))

	Dependencies.Mpp.f2 { commonMainApi(it) }
	Dependencies.Mpp.fs { commonMainApi(it) }
	Dependencies.Jvm.Cccev.client(::commonMainApi)
	Dependencies.Jvm.Cccev.dsl(::commonMainApi)
}
