plugins {
	id("city.smartb.fixers.gradle.kotlin.mpp")
	id("city.smartb.fixers.gradle.publish")
	kotlin("plugin.serialization")
}

dependencies {
	Dependencies.Mpp.f2(::commonMainApi)
	Dependencies.Mpp.fs(::commonMainApi)
	Dependencies.Jvm.Cccev.client(::commonMainApi)
	Dependencies.Jvm.Cccev.dsl(::commonMainApi)
}
