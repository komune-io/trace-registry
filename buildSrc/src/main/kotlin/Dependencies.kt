import city.smartb.gradle.dependencies.FixersDependencies
import city.smartb.gradle.dependencies.FixersPluginVersions
import city.smartb.gradle.dependencies.FixersVersions
import city.smartb.gradle.dependencies.Scope
import city.smartb.gradle.dependencies.add

object PluginVersions {
	val fixers = FixersPluginVersions.fixers
	const val kotlin = FixersPluginVersions.kotlin
	const val springBoot = FixersPluginVersions.springBoot
}

object Versions {
	const val springBoot = PluginVersions.springBoot
	const val springData = FixersVersions.Spring.data
	val f2 = PluginVersions.fixers
	val s2 = PluginVersions.fixers
	val i2 = PluginVersions.fixers
	val fs = PluginVersions.fixers
	val im = PluginVersions.fixers

	const val apacheCsv = "1.8"
	const val flyway = "9.2.2"
	const val html2pdf = "4.0.3"
	const val jackson = FixersVersions.Json.jacksonKotlin
	const val jaxb = "2.3.2"
	const val postgresql = "42.4.0"
}

object Repo {
	val snapshot: List<String> = listOf(
		// For redis-om-spring staging
		"https://s01.oss.sonatype.org/content/repositories/snapshots",
		// For fixers
		"https://oss.sonatype.org/service/local/repositories/releases/content",
		"https://oss.sonatype.org/content/repositories/snapshots",
		//For pdfbox
		"https://jitpack.io"
	)
}

object Dependencies {
	object Jvm {
		fun springTest(scope: Scope) = FixersDependencies.Jvm.Test.junit(scope).add(
			"org.springframework.boot:spring-boot-starter-test:${Versions.springBoot}",
		)

		fun junit(scope: Scope) = FixersDependencies.Jvm.Test.junit(scope)

		fun cucumber(scope: Scope) = FixersDependencies.Jvm.Test.cucumber(scope).add(
			"io.cucumber:cucumber-spring:${FixersVersions.Test.cucumber}"
		)

		fun f2(scope: Scope) = scope.add(
			"city.smartb.f2:f2-spring-boot-starter-function-http:${Versions.f2}",
		)
		fun f2OpenApi(scope: Scope) = scope.add(
			"city.smartb.f2:f2-spring-boot-openapi:${Versions.f2}"
		)

		fun i2Keycloack(scope: Scope) = scope.add(
			"city.smartb.i2:i2-spring-boot-starter-auth-keycloak:${Versions.i2}"
		)
		fun fs(scope: Scope) = scope.add(
			"city.smartb.fs:file-client:${Versions.fs}"
		)

		fun jackson(scope: Scope) = FixersDependencies.Jvm.Json.jackson(scope).add(
			"com.fasterxml.jackson.dataformat:jackson-dataformat-csv:${Versions.jackson}"
		)

		fun redisOm(scope: Scope) = FixersDependencies.Jvm.Json.jackson(scope).add(
			"com.redis.om:redis-om-spring:0.8.0-SNAPSHOT"
		)

		fun postgres(scope: Scope, runtimeOnly: Scope) = scope.add(
			"org.springframework.boot:spring-boot-starter-data-jpa:${Versions.springBoot}",
			"jakarta.xml.bind:jakarta.xml.bind-api:${Versions.jaxb}",
			"com.sun.xml.bind:jaxb-impl:${Versions.jaxb}"
		).also { runtimeOnly.add("org.postgresql:postgresql:${Versions.postgresql}") }

		fun s2StoringData(scope: Scope) = scope.add(
			"city.smartb.s2:s2-spring-boot-starter-storing-data:${Versions.s2}",
		)

		fun s2SourcingData(scope: Scope) = scope.add(
			"city.smartb.s2:s2-spring-boot-starter-sourcing-data:${Versions.s2}",
		)

		fun s2SourcingSsm(scope: Scope) = scope.add(
			"city.smartb.s2:s2-spring-boot-starter-sourcing-ssm:${Versions.s2}",
		)
	}

	object Mpp {
		fun f2(scope: Scope) = scope.add(
			"city.smartb.f2:f2-dsl-function:${Versions.f2}"
		)

		fun fs(scope: Scope) = scope.add(
			"city.smartb.fs:file-domain:${Versions.fs}"
		)

		fun im(scope: Scope) = scope.add(
			"city.smartb.im:organization-domain:${Versions.im}",
			"city.smartb.im:user-domain:${Versions.im}"
		)

		fun s2(scope: Scope) = scope.add(
			"city.smartb.s2:s2-automate-dsl:${Versions.s2}",
			"city.smartb.s2:s2-event-sourcing-dsl:${Versions.s2}"
		)

		fun test(scope: Scope) = scope.add(
			"org.jetbrains.kotlin:kotlin-test-common:${PluginVersions.kotlin}",
		)
	}
}
