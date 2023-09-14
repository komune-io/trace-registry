plugins {
	id("city.smartb.fixers.gradle.kotlin.jvm")
	kotlin("plugin.spring")
	kotlin("plugin.serialization")
	kotlin("kapt")
}

dependencies {
	Dependencies.Jvm.Spring.autoConfigure(::implementation, ::kapt)
	Dependencies.Jvm.Cccev.client(::api)
	Dependencies.Mpp.bignum(::api)

	implementation("com.itextpdf:html2pdf:${Versions.html2pdf}")
	implementation(project(":platform:api:api-commons"))
}
