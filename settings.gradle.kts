pluginManagement {
	repositories {
		mavenLocal()
		mavenCentral()
		gradlePluginPortal()
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
	"platform:script:script-import",
	"platform:script:script-init",
	"platform:script:script-gateway",
)

include(
	"platform:infra:brevo",
	"platform:infra:fs",
	"platform:infra:im",
	"platform:infra:meilisearch",
	"platform:infra:neo4j",
	"platform:infra:pdf",
	"platform:infra:postgresql",
	"platform:infra:redis",
	"platform:infra:slack",
	"platform:infra:svg"
)

include("platform:test")
include("sel")

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
//	"platform:control:f2:activity-f2:activity-f2-api",
//	"platform:control:f2:activity-f2:activity-f2-client",
	"platform:control:f2:activity-f2:activity-f2-domain",
//	"platform:control:f2:cccev-f2:cccev-f2-api",
//	"platform:control:f2:cccev-f2:cccev-f2-client",
//	"platform:control:f2:cccev-f2:cccev-f2-domain",
	"platform:control:f2:certification-f2:certification-f2-api",
	"platform:control:f2:certification-f2:certification-f2-client",
	"platform:control:f2:certification-f2:certification-f2-domain",
//	"platform:control:f2:dcs-f2:dcs-f2-api",
//	"platform:control:f2:dcs-f2:dcs-f2-client",
//	"platform:control:f2:dcs-f2:dcs-f2-domain",
	"platform:control:f2:protocol-f2:protocol-f2-api",
	"platform:control:f2:protocol-f2:protocol-f2-client",
	"platform:control:f2:protocol-f2:protocol-f2-domain",
)

include(
	"platform:control:core:cccev:cccev-api",
	"platform:control:core:cccev:cccev-domain"
)

//include(
//	"platform:control:infra:cccev"
//)

include(
	"platform:control:test:bdd"
)

///////////////////////////////
// Identity
///////////////////////////////
include(
	"platform:identity:f2:organization-f2:organization-f2-api",
	"platform:identity:f2:organization-f2:organization-f2-domain",
	"platform:identity:f2:user-f2:user-f2-api",
	"platform:identity:f2:user-f2:user-f2-domain",
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
	"platform:data:f2:catalogue-f2:catalogue-f2-domain",
	"platform:data:f2:catalogue-draft-f2:catalogue-draft-f2-api",
	"platform:data:f2:catalogue-draft-f2:catalogue-draft-f2-client",
	"platform:data:f2:catalogue-draft-f2:catalogue-draft-f2-domain",
	"platform:data:f2:cccev-f2-old:cccev-f2-old-api",
	"platform:data:f2:cccev-f2-old:cccev-f2-old-client",
	"platform:data:f2:cccev-f2-old:cccev-f2-old-domain",
	"platform:data:f2:concept-f2:concept-f2-api",
	"platform:data:f2:concept-f2:concept-f2-client",
	"platform:data:f2:concept-f2:concept-f2-domain",
	"platform:data:f2:dataset-f2:dataset-f2-api",
	"platform:data:f2:dataset-f2:dataset-f2-client",
	"platform:data:f2:dataset-f2:dataset-f2-domain",
	"platform:data:f2:license-f2:license-f2-api",
	"platform:data:f2:license-f2:license-f2-client",
	"platform:data:f2:license-f2:license-f2-domain"
)

include(
	"platform:data:s2:catalogue:catalogue-api",
	"platform:data:s2:catalogue:catalogue-domain",
	"platform:data:s2:catalogue-draft:catalogue-draft-api",
	"platform:data:s2:catalogue-draft:catalogue-draft-domain",
	"platform:data:s2:cccev-old:cccev-old-api",
	"platform:data:s2:cccev-old:cccev-old-domain",
	"platform:data:s2:concept:concept-api",
	"platform:data:s2:concept:concept-domain",
	"platform:data:s2:dataset:dataset-api",
	"platform:data:s2:dataset:dataset-domain",
	"platform:data:s2:license:license-api",
	"platform:data:s2:license:license-domain",
)

///////////////////////////////
// Global
///////////////////////////////
include(
	"platform:global:f2:entity-f2:entity-f2-api",
	"platform:global:f2:entity-f2:entity-f2-client",
	"platform:global:f2:entity-f2:entity-f2-domain",
)
