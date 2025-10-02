plugins {
	id("io.komune.fixers.gradle.kotlin.jvm")
	id("io.komune.fixers.gradle.publish")
	kotlin("plugin.serialization")
	kotlin("kapt")
}

dependencies {
	Dependencies.Jvm.im(::implementation)
    Dependencies.Jvm.Spring.autoConfigure(::implementation, ::kapt)
}
