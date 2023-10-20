plugins {
	id("city.smartb.fixers.gradle.kotlin.mpp")
	id("city.smartb.fixers.gradle.publish")
	kotlin("plugin.serialization")
}

dependencies {
	commonMainApi(project(":ontology:s2:catalogue:catalogue-domain"))
	commonMainApi(project(":ontology:f2:dataset-f2:dataset-f2-domain"))
	commonMainApi(project(":ontology:dsl:dcat"))
	commonMainApi(project(":ontology:dsl:structure"))

	Dependencies.Mpp.f2 { commonMainApi(it) }
	Dependencies.Mpp.fs { commonMainApi(it) }
}
