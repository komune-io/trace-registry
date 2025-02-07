plugins {
	id("io.komune.fixers.gradle.kotlin.mpp")
	kotlin("plugin.spring")
	kotlin("plugin.serialization")
}

dependencies {
	jvmMainImplementation(project(Modules.api.config))
	Dependencies.Jvm.meilisearch(::jvmMainApi)
	Dependencies.Jvm.jackson(::jvmMainImplementation)
}
