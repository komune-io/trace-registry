plugins {
	id("city.smartb.fixers.gradle.kotlin.mpp")
	id("city.smartb.fixers.gradle.publish")
	kotlin("plugin.serialization")
}

dependencies {
	commonMainApi(project(":platform:s2:commons"))
	commonMainApi(project(":ontology:dsl:dcat"))

    Dependencies.Mpp.cccevDomain(::commonMainApi)
	Dependencies.Mpp.im(::commonMainApi)
}

tasks.withType<Test>().configureEach {
	useJUnitPlatform()
}