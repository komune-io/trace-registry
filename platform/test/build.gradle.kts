plugins {
	id("io.komune.fixers.gradle.kotlin.jvm")
	kotlin("plugin.spring")
}

dependencies {
	implementation(project(":platform:f2:activity-f2:activity-f2-api"))
	implementation(project(":platform:f2:asset-order-f2:asset-order-f2-api"))
	implementation(project(":platform:f2:asset-pool-f2:asset-pool-f2-api"))
	implementation(project(":platform:f2:dcs-f2:dcs-f2-api"))
	implementation(project(":platform:f2:project-f2:project-f2-api"))


	implementation(project(":ontology:f2:catalogue-f2:catalogue-f2-api"))
	implementation(project(":ontology:s2:catalogue:catalogue-api"))

	implementation(project(":ontology:f2:dataset-f2:dataset-f2-api"))
	implementation(project(":ontology:s2:dataset:dataset-api"))

	implementation(project(":platform:s2:asset:asset-api"))
	implementation(project(":platform:s2:project:project-api"))

	implementation(project(":platform:infra:im"))
	implementation(project(":platform:infra:redis"))

	implementation(project(":platform:api:api-commons"))

	Dependencies.Jvm.s2Bdd(::api)
	implementation("io.github.origin-energy:java-snapshot-testing-core:${Versions.javaSnapshotTesting}")
	implementation("io.github.origin-energy:java-snapshot-testing-plugin-jackson:${Versions.javaSnapshotTesting}")
}
