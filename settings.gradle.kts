pluginManagement {
	repositories {
		mavenLocal()
		mavenCentral()
		gradlePluginPortal()
		maven { url = uri("https://s01.oss.sonatype.org/content/repositories/snapshots") }
		maven { url = uri("https://repo.spring.io/milestone") }
	}
}

rootProject.name = "registry"

include(
	"platform:api:api-config",
	"platform:api:api-gateway",
	"platform:api:api-init",
	"platform:api:api-js-export",
)

include(
	"platform:script:script-init",
	"platform:script:script-gateway",
)

include(
	"platform:infra:brevo",
	"platform:infra:fs",
	"platform:infra:im",
	"platform:infra:pdf",
	"platform:infra:redis"
)

///////////////////////////////
// Commons
///////////////////////////////
include(
	"platform:commons",
)

///////////////////////////////
// Control
///////////////////////////////
include(
	"platform:control:f2:dcs-f2:dcs-f2-api",
	"platform:control:f2:dcs-f2:dcs-f2-client",
	"platform:control:f2:dcs-f2:dcs-f2-domain",
)


include(
	"platform:control:f2:activity-f2:activity-f2-api",
	"platform:control:f2:activity-f2:activity-f2-client",
	"platform:control:f2:activity-f2:activity-f2-domain"
)


include(
	"platform:control:infra:cccev"
)

include(
	"platform:control:test:bdd"
)

///////////////////////////////
// Project
///////////////////////////////
include(
	"platform:project:s2:asset:asset-api",
	"platform:project:s2:asset:asset-domain",

	"platform:project:s2:order:order-api",
	"platform:project:s2:order:order-domain",

	"platform:project:s2:project:project-api",
	"platform:project:s2:project:project-domain",
)


include(
	"platform:project:f2:asset-order-f2:asset-order-f2-api",
	"platform:project:f2:asset-order-f2:asset-order-f2-domain",
	"platform:project:f2:asset-order-f2:asset-order-f2-domain"
)

include(
	"platform:project:f2:asset-pool-f2:asset-pool-f2-api",
	"platform:project:f2:asset-pool-f2:asset-pool-f2-client",
	"platform:project:f2:asset-pool-f2:asset-pool-f2-domain"
)

include(
	"platform:project:f2:project-f2:project-f2-api",
	"platform:project:f2:project-f2:project-f2-client",
	"platform:project:f2:project-f2:project-f2-domain",
)

include(
	"platform:project:f2:chat-f2:chat-f2-api",
	"platform:project:f2:chat-f2:chat-f2-client",
	"platform:project:f2:chat-f2:chat-f2-domain",
)

include(
	"platform:project:test"
)

///////////////////////////////
// Data
///////////////////////////////
include(
	"platform:data:test"
)


include(
	"platform:data:dsl:client",
	"platform:data:dsl:dcat",
	"platform:data:dsl:skos",
	"platform:data:dsl:structure",
)

include(
	"platform:data:f2:catalogue-f2:catalogue-f2-api",
	"platform:data:f2:catalogue-f2:catalogue-f2-client",
	"platform:data:f2:catalogue-f2:catalogue-f2-domain"
)

include(
	"platform:data:f2:dataset-f2:dataset-f2-api",
	"platform:data:f2:dataset-f2:dataset-f2-client",
	"platform:data:f2:dataset-f2:dataset-f2-domain"
)

include(
	"platform:data:s2:catalogue:catalogue-api",
	"platform:data:s2:catalogue:catalogue-domain",
)

include(
	"platform:data:s2:dataset:dataset-api",
	"platform:data:s2:dataset:dataset-domain",
)