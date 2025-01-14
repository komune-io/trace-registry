plugins {
	id("io.komune.fixers.gradle.kotlin.mpp")
	kotlin("plugin.spring")
	kotlin("plugin.serialization")
}

dependencies {
	jvmMainImplementation(project(Modules.api.config))
	jvmMainImplementation(project(Modules.commons))

	jvmMainImplementation("com.brevo:brevo:${Versions.brevo}")
}
