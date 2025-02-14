plugins {
	id("io.komune.fixers.gradle.kotlin.mpp")
	id("io.komune.fixers.gradle.publish")
	kotlin("plugin.serialization")
}

dependencies {
	commonMainApi(project(Modules.data.s2.catalogue.domain))
	commonMainApi(project(Modules.data.s2.catalogueDraft.domain))
	commonMainApi(project(Modules.data.s2.dataset.domain))
	commonMainApi(project(Modules.data.dsl.dcat))

	Dependencies.Mpp.f2 { commonMainApi(it) }
	Dependencies.Mpp.fs { commonMainApi(it) }
}
