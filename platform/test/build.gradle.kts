plugins {
	id("city.smartb.fixers.gradle.kotlin.jvm")
	kotlin("plugin.spring")
}

dependencies {
	implementation(project(":platform:f2:activity-f2:activity-f2-api"))
	implementation(project(":platform:f2:asset-order-f2:asset-order-f2-api"))
	implementation(project(":platform:f2:asset-pool-f2:asset-pool-f2-api"))
	implementation(project(":platform:f2:catalogue-f2:catalogue-f2-api"))
	implementation(project(":platform:s2:catalogue:catalogue-api"))
	implementation(project(":platform:f2:project-f2:project-f2-api"))

	implementation(project(":platform:s2:asset:asset-api"))
	implementation(project(":platform:s2:project:project-api"))

	implementation(project(":platform:infra:im"))
	implementation(project(":platform:infra:redis"))

	implementation(project(":platform:api:api-commons"))

	Dependencies.Jvm.s2Bdd(::api)
}
