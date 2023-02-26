pluginManagement {
	repositories {
		mavenLocal()
		mavenCentral()
		gradlePluginPortal()
		maven { url = uri("https://oss.sonatype.org/content/repositories/snapshots") }
		maven { url = uri("https://repo.spring.io/milestone") }
	}
}

rootProject.name = "verified-emission-reduction-registry"

include(
	"debug:db-verification",
)
include(
	"platform:api:api-commons",
	"platform:api:api-config",
	"platform:api:api-gateway",
	"platform:api:api-init",
)

//include(
//	"platform:bdd",
//)

include(
	"platform:f2:project-f2:project-f2-api",
	"platform:f2:project-f2:project-f2-domain",
)
include(
	"platform:cccev:cccev-init"
)

//include(
//	"platform:f2:task-f2:task-f2-api",
//	"platform:f2:task-f2:task-f2-domain",
//)


include(
	"platform:f2:activity-f2:activity-f2-api",
	"platform:f2:activity-f2:activity-f2-domain",
	"platform:s2:activity:activity-api",
	"platform:s2:activity:activity-domain",
)

include(
	"platform:f2:asset-f2:asset-f2-api",
	"platform:f2:asset-f2:asset-f2-domain",
	"platform:s2:asset:asset-api",
	"platform:s2:asset:asset-domain",
)

include(
	"platform:s2:project:project-api",
	"platform:s2:project:project-domain",
)

include(
	"platform:f2:protocol-f2:protocol-f2-api",
	"platform:f2:protocol-f2:protocol-f2-domain",
	"platform:s2:protocol:protocol-api",
	"platform:s2:protocol:protocol-domain",
)


//include(
//	"platform:s2:notification:notification-api",
//	"platform:s2:notification:notification-domain",
//	"platform:s2:notification:notification-tasks",
//)


//include(
//	"platform:s2:task:task-api",
//	"platform:s2:task:task-domain",
//	"platform:s2:task:task-tasks",
//)
