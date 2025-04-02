plugins {
	id("io.komune.fixers.gradle.kotlin.jvm")
	kotlin("plugin.spring")
	kotlin("plugin.serialization")
	kotlin("kapt")
}

dependencies {
	Dependencies.Jvm.Spring.autoConfigure(::implementation, ::kapt)
	Dependencies.Mpp.bignum(::api)
	implementation(project(":platform:commons"))

	implementation("org.apache.xmlgraphics:batik-transcoder:1.18")
	implementation("org.apache.xmlgraphics:fop:2.10")
}
