plugins {
	id("io.komune.fixers.gradle.kotlin.jvm")
	id("io.komune.fixers.gradle.publish")
	kotlin("plugin.serialization")
	kotlin("kapt")
}

dependencies {
	implementation(project(Modules.commons))
	implementation(project(Modules.data.dsl.client))
    implementation(project(Modules.script.commons))
	implementation(project(Modules.script.init))

	project(":platform").dependencyProject.subprojects.forEach {
		if ("-client" in it.name) {
			implementation(it)
		}
	}

	Dependencies.Jvm.im(::implementation)
	Dependencies.Jvm.Spring.autoConfigure(::implementation, ::kapt)

	Dependencies.Jvm.Cccev.client(::implementation)
	Dependencies.Jvm.Test.dataFaker(::implementation)
	Dependencies.Jvm.junit(::testImplementation)

	implementation("com.jayway.jsonpath:json-path:${Versions.jsonPath}")
	implementation("org.apache.tika:tika-core:${Versions.apacheTika}")
}
