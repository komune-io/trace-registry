plugins {
	id("city.smartb.fixers.gradle.kotlin.jvm")
	kotlin("plugin.spring")
	kotlin("plugin.serialization")
}

dependencies {
	implementation(project(":platform:api:api-commons"))
	implementation(project(":platform:api:api-config"))

	implementation(project(":platform:f2:project-f2:project-f2-api"))
	implementation(project(":platform:f2:task-f2:task-f2-api"))

	implementation(project(":platform:s2:notification:notification-api"))
	implementation(project(":platform:s2:notification:notification-tasks"))
	implementation(project(":platform:s2:project:project-api"))
	implementation(project(":platform:s2:project:project-tasks"))
	implementation(project(":platform:s2:task:task-api"))
	implementation(project(":platform:s2:task:task-tasks"))

	implementation("city.smartb.im:api-config:${Versions.im}")

	Dependencies.Jvm.f2(::implementation)
	Dependencies.Mpp.f2(::implementation)
	Dependencies.Jvm.cucumber(::implementation)
	Dependencies.Jvm.s2StoringData(::implementation)
	Dependencies.Jvm.springTest(::api)
	Dependencies.Jvm.redisOm(::implementation)

	testImplementation("org.springframework.boot:spring-boot-starter-test")
	city.smartb.gradle.dependencies.FixersDependencies.Jvm.Test.junit(::implementation)
}
