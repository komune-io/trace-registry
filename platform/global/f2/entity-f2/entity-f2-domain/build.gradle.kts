plugins {
	id("io.komune.fixers.gradle.kotlin.mpp")
	id("io.komune.fixers.gradle.publish")
	kotlin("plugin.serialization")
}

dependencies {
	commonMainApi(project(Modules.data.f2.catalogue.domain))
	commonMainApi(project(Modules.data.f2.catalogueDraft.domain))
	commonMainApi(project(Modules.data.f2.concept.domain))
	commonMainApi(project(Modules.data.f2.dataset.domain))
	commonMainApi(project(Modules.data.f2.cccev.domain))
	commonMainApi(project(Modules.data.f2.license.domain))

	commonMainApi(project(Modules.identity.f2.organization.domain))
	commonMainApi(project(Modules.identity.f2.user.domain))

	Dependencies.Mpp.f2 { commonMainApi(it) }
	Dependencies.Mpp.fs { commonMainApi(it) }
}
