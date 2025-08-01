plugins {
	id("io.komune.fixers.gradle.kotlin.jvm")
	kotlin("plugin.spring")
}

dependencies {
//	implementation(project(":platform:control:f2:activity-f2:activity-f2-api"))
//	implementation(project(":platform:control:f2:dcs-f2:dcs-f2-api"))
//	implementation(project(":platform:control:infra:cccev"))

	implementation(project(":platform:project:f2:asset-order-f2:asset-order-f2-api"))
	implementation(project(":platform:project:f2:asset-pool-f2:asset-pool-f2-api"))
	implementation(project(":platform:project:f2:project-f2:project-f2-api"))
	implementation(project(":platform:project:s2:asset:asset-api"))
	implementation(project(":platform:project:s2:project:project-api"))

	implementation(project(":platform:data:f2:catalogue-f2:catalogue-f2-api"))
	implementation(project(":platform:data:s2:catalogue:catalogue-api"))
	implementation(project(":platform:data:f2:dataset-f2:dataset-f2-api"))
	implementation(project(":platform:data:s2:dataset:dataset-api"))

	implementation(project(":platform:infra:im"))
	implementation(project(":platform:infra:redis"))

	implementation(project(":platform:commons"))

	Dependencies.Jvm.f2Auth(::implementation)
	Dependencies.Jvm.s2Bdd(::implementation)
	implementation("org.springframework.boot:spring-boot-starter-test:${PluginVersions.springBoot}") {
		exclude(group = "org.skyscreamer", module = "jsonassert")
	}
	Dependencies.Jvm.javaSnapshotTesting(::implementation)
}
