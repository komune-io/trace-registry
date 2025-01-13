plugins {
	id("io.komune.fixers.gradle.kotlin.mpp")
	kotlin("plugin.serialization")
}

dependencies {
	jsMainApi(project(":platform:control:f2:activity-f2:activity-f2-domain"))
	jsMainApi(project(":platform:project:f2:asset-order-f2:asset-order-f2-domain"))
	jsMainApi(project(":platform:project:f2:asset-pool-f2:asset-pool-f2-domain"))
	jsMainApi(project(":platform:project:f2:chat-f2:chat-f2-domain"))
	jsMainApi(project(":platform:control:f2:dcs-f2:dcs-f2-domain"))
	jsMainApi(project(":platform:project:f2:project-f2:project-f2-domain"))
	jsMainApi(project(":platform:data:f2:catalogue-f2:catalogue-f2-domain"))
	jsMainApi(project(":platform:data:f2:dataset-f2:dataset-f2-domain"))
}
