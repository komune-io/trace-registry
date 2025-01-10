plugins {
	id("io.komune.fixers.gradle.kotlin.mpp")
	id("io.komune.fixers.gradle.publish")
	kotlin("plugin.serialization")
}

dependencies {
	commonMainApi(project(":platform:project:s2:project:project-domain"))

	Dependencies.Mpp.f2 { commonMainApi(it) }
	Dependencies.Mpp.fs { commonMainApi(it) }
	Dependencies.Jvm.Cccev.dsl(::commonMainApi)
}
