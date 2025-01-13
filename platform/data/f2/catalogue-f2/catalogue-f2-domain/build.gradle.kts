plugins {
	id("io.komune.fixers.gradle.kotlin.mpp")
	id("io.komune.fixers.gradle.publish")
	kotlin("plugin.serialization")
}

dependencies {
	commonMainApi(project(":platform:data:s2:catalogue:catalogue-domain"))
	commonMainApi(project(":platform:data:f2:dataset-f2:dataset-f2-domain"))
	commonMainApi(project(":platform:data:dsl:dcat"))
	commonMainApi(project(":platform:data:dsl:structure"))

	Dependencies.Mpp.f2 { commonMainApi(it) }
	Dependencies.Mpp.fs { commonMainApi(it) }
}
