pluginManagement {
	repositories {
		gradlePluginPortal()
		mavenCentral()
		maven { url = uri("https://oss.sonatype.org/content/repositories/snapshots") }
		maven { url = uri("https://repo.spring.io/milestone") }
	}
}

rootProject.name = "cccev"

include(
	"cccev-dsl:cccev-dsl-model",
	"cccev-dsl:cccev-dsl-client",
)

include(
	"api-commons",
	"api-config",
	"api-gateway",
	"cccev-client",
	"cccev-core",
	"cccev-f2",
	"cccev-test",
)

include(
	"cccev-f2:evidence-f2:cccev-evidence-f2-api",
	"cccev-f2:evidence-f2:cccev-evidence-f2-domain",
)

include(
	"cccev-infra:fs",
	"cccev-infra:neo4j",
)
