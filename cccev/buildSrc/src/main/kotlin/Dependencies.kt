import city.smartb.gradle.dependencies.FixersDependencies
import city.smartb.gradle.dependencies.FixersPluginVersions
import city.smartb.gradle.dependencies.FixersVersions
import city.smartb.gradle.dependencies.Scope
import city.smartb.gradle.dependencies.add

object Framework {
	val fixers = FixersPluginVersions.fixers
	val connect = "0.15.0-RC1"
}

object PluginVersions {
	const val kotlin = FixersPluginVersions.kotlin
	const val springBoot = FixersPluginVersions.springBoot //"3.2.2"
	val fixers = Framework.fixers
	val d2 = Framework.fixers
}

object Versions {
	val fs = Framework.connect
	val springBoot = PluginVersions.springBoot

	const val cucumber = FixersVersions.Test.cucumber
	const val ktor = FixersVersions.Kotlin.ktor
	const val awaitility = "4.1.1"
	const val datafaker = "1.8.1"
	const val javaSnapshotTesting = "4.0.7"
	const val jsonAssert = "1.5.1"
	const val neo4jOgm = "4.0.10"
}

object Repo {
	val snapshot: List<String> = listOf(
		// For fixers
		"https://oss.sonatype.org/content/repositories/snapshots",
	)
}

object Dependencies {
	object Jvm {
		fun s2Bdd(scope: Scope) = scope.add(
			"city.smartb.s2:s2-test-bdd:${Framework.fixers}",
			"org.springframework.boot:spring-boot-starter-test:${PluginVersions.springBoot}"
		).also(::cucumber)
			.also(::junit)

		fun f2(scope: Scope) = scope.add(
			"city.smartb.f2:f2-spring-boot-starter-function:${Framework.fixers}",
			"city.smartb.f2:f2-spring-boot-exception-http:${Framework.fixers}"
		)

		fun f2Http(scope: Scope) = scope.add(
			"city.smartb.f2:f2-spring-boot-starter-function-http:${Framework.fixers}",
			"city.smartb.f2:f2-spring-boot-openapi:${Framework.fixers}"
		)

		fun s2Logger(scope: Scope) = scope.add(
			"city.smartb.s2:s2-spring-boot-starter-utils-logger:${Framework.fixers}"
		)

		fun jackson(scope: Scope) = FixersDependencies.Jvm.Json.jackson(scope)
		fun coroutines(scope: Scope) = FixersDependencies.Jvm.Kotlin.coroutines(scope)
		fun cucumber(scope: Scope) = FixersDependencies.Jvm.Test.cucumber(scope).also {
			scope.add("io.cucumber:cucumber-spring:${Versions.cucumber}")
		}
		fun junit(scope: Scope) = FixersDependencies.Jvm.Test.junit(scope).also {
			scope.add("org.awaitility:awaitility:${Versions.awaitility}")
		}

		fun neo4j(scope: Scope) = scope.add(
			"org.neo4j:neo4j-ogm-core:${Versions.neo4jOgm}",
			"org.neo4j:neo4j-ogm-bolt-driver:${Versions.neo4jOgm}"
		)

		object Fs {
			fun client(scope: Scope) = scope.add(
				"city.smartb.fs:fs-file-client:${Versions.fs}",
				"city.smartb.fs:fs-spring-utils:${Versions.fs}",
				"io.ktor:ktor-utils:${Versions.ktor}"
			)
		}

		object Spring {
			fun tx(scope: Scope) = FixersDependencies.Jvm.Test.junit(scope).also {
				scope.add("org.springframework:spring-tx:${FixersVersions.Spring.framework}")
			}
			fun autoConfigure(scope: Scope, ksp: Scope)
					= FixersDependencies.Jvm.Spring.autoConfigure(scope, ksp)
		}

		object Test {
			fun dataFaker(scope: Scope) = scope.add(
				"net.datafaker:datafaker:${Versions.datafaker}",
			)
		}

	}
	object Mpp {
		fun f2(scope: Scope) = scope.add(
			"city.smartb.f2:f2-dsl-cqrs:${Framework.fixers}",
			"city.smartb.f2:f2-dsl-function:${Framework.fixers}"
		)

		fun f2Client(scope: Scope) = scope.add(
			"city.smartb.f2:f2-client-ktor:${Framework.fixers}",
			"io.ktor:ktor-client-auth:${Versions.ktor}",
			"io.ktor:ktor-client-logging:${Versions.ktor}",
		)

		fun fs(scope: Scope) = scope.add(
			"city.smartb.fs:fs-file-domain:${Versions.fs}"
		)
	}
}

object Modules {
	object api {
		const val commons = ":api-commons"
		const val config = ":api-config"
		const val gateway = ":api-gateway"
	}

	object cccev {
		object dsl {
			const val client = ":cccev-dsl:cccev-dsl-client"
			const val model = ":cccev-dsl:cccev-dsl-model"
		}
		object infra {
			const val fs = ":cccev-infra:fs"
			const val neo4j = ":cccev-infra:neo4j"
		}

		const val client = ":cccev-client"
		const val core = ":cccev-core"
		const val f2 = ":cccev-f2"
		const val test = ":cccev-test"
	}
}
