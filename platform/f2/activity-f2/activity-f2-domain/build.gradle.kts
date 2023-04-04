plugins {
	id("city.smartb.fixers.gradle.kotlin.mpp")
	kotlin("plugin.serialization")
}

dependencies {
	Dependencies.Mpp.f2 { commonMainApi(it) }
	commonMainApi(project(":platform:api:api-commons"))
	Dependencies.Jvm.Cccev.dsl(::commonMainApi)
}
