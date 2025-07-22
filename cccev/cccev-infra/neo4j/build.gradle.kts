plugins {
	id("city.smartb.fixers.gradle.kotlin.jvm")
	id("city.smartb.fixers.gradle.publish")
	kotlin("plugin.spring")
	kotlin("plugin.serialization")
	kotlin("kapt")
}

dependencies {
	implementation(project(Modules.api.commons))

	Dependencies.Jvm.neo4j(::api)
	Dependencies.Jvm.Spring.autoConfigure(::implementation, ::kapt)
	implementation("city.smartb.f2:f2-spring-boot-exception-http:${Framework.fixers}")
}
