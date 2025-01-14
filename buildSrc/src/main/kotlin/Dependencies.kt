import io.komune.gradle.dependencies.FixersDependencies
import io.komune.gradle.dependencies.FixersPluginVersions
import io.komune.gradle.dependencies.FixersVersions
import io.komune.gradle.dependencies.Scope
import io.komune.gradle.dependencies.add

object Framework {
	val fixers = FixersPluginVersions.fixers
	val connect = "0.21.0-SNAPSHOT"
}

object PluginVersions {
	val fixers = Framework.fixers
	const val kotlin = FixersPluginVersions.kotlin
	const val springBoot = FixersPluginVersions.springBoot
}

object Versions {
	const val springBoot = PluginVersions.springBoot
	const val springData = FixersVersions.Spring.data
	val f2 = Framework.fixers
	val s2 = Framework.fixers
	val fs = Framework.connect
	val im = Framework.connect
    val cccev = Framework.connect

	const val bignum = "0.3.8"
	const val brevo = "1.0.0"
	const val datafaker = "1.8.1"
	const val html2pdf = "5.0.0"
	const val jacksonKotlin = FixersVersions.Json.jacksonKotlin
	const val javaSnapshotTesting = "4.0.8"
	const val ktor = FixersVersions.Kotlin.ktor
	const val redisOm = "0.8.9"
}

object Repo {
	val snapshot: List<String> = listOf(
		"https://s01.oss.sonatype.org/service/local/repositories/releases/content",
		"https://s01.oss.sonatype.org/content/repositories/snapshots",
	)
}

object Dependencies {
	object Jvm {
		object Spring {
			fun test(scope: Scope) = FixersDependencies.Jvm.Test.junit(scope).add(
				"org.springframework.boot:spring-boot-starter-test:${Versions.springBoot}",
			)
			fun autoConfigure(scope: Scope, ksp: Scope)
				= FixersDependencies.Jvm.Spring.autoConfigure(scope, ksp)
		}

		fun junit(scope: Scope) = FixersDependencies.Jvm.Test.junit(scope)

		fun cucumber(scope: Scope) = FixersDependencies.Jvm.Test.cucumber(scope).add(
			"io.cucumber:cucumber-spring:${FixersVersions.Test.cucumber}"
		)

		fun s2Bdd(scope: Scope) = scope.add(
			"io.komune.s2:s2-test-bdd:${Versions.s2}",
		).also(::cucumber)
			.also(::junit)

		fun javaSnapshotTesting(scope: Scope) = scope.add(
			"io.github.origin-energy:java-snapshot-testing-core:${Versions.javaSnapshotTesting}",
			"io.github.origin-energy:java-snapshot-testing-plugin-jackson:${Versions.javaSnapshotTesting}"
		)

		fun f2(scope: Scope) = scope.add(
			"io.komune.f2:f2-spring-boot-starter-function-http:${Versions.f2}",
			"org.springframework.boot:spring-boot-starter-logging:${Versions.springBoot}"
		)
		fun f2OpenApi(scope: Scope) = scope.add(
			"io.komune.f2:f2-spring-boot-openapi:${Versions.f2}"
		)

		fun f2Auth(scope: Scope) = scope.add(
			"io.komune.f2:f2-spring-boot-starter-auth-tenant:${Versions.f2}",
		)

		fun im(scope: Scope) = scope.add(
			"io.komune.im:im-apikey-client:${Versions.im}",
			"io.komune.im:im-organization-client:${Versions.im}",
			"io.komune.im:im-privilege-client:${Versions.im}",
			"io.komune.im:im-space-client:${Versions.im}",
			"io.komune.im:im-user-client:${Versions.im}",
		)

		object Cccev {
			fun client(scope: Scope) = scope.add(
				"io.komune.cccev:cccev-dsl-client:${Versions.cccev}",
			)

			fun dsl(scope: Scope) = scope.add(
				"io.komune.cccev:cccev-dsl-model:${Versions.cccev}",
			)
		}

		object Im {
			object Client {
				fun organization(scope: Scope) = scope.add(
					"io.komune.im:im-organization-client:${Versions.fs}",
					"io.ktor:ktor-utils:${Versions.ktor}"
				)

				fun userClient(scope: Scope) = scope.add(
					"io.komune.im:im-user-client:${Versions.fs}",
					"io.ktor:ktor-utils:${Versions.ktor}"
				)
			}
		}
		object Fs {
			fun client(scope: Scope) = scope.add(
				"io.komune.fs:fs-file-client:${Versions.fs}",
				"io.komune.fs:fs-spring-utils:${Versions.fs}",
			).also {
				Mpp.Ktor.utils(scope)
			}
		}

		fun jackson(scope: Scope) = FixersDependencies.Jvm.Json.jackson(scope).add(
			"com.fasterxml.jackson.dataformat:jackson-dataformat-csv:${Versions.jacksonKotlin}"
		)

		fun redisOm(scope: Scope, kapt: Scope) = FixersDependencies.Jvm.Json.jackson(scope).also {
			val redisOm = "com.redis.om:redis-om-spring:${Versions.redisOm}"
			scope.add(redisOm)
			kapt.add(redisOm)
		}

		fun s2SourcingSsm(scope: Scope) = scope.add(
			"io.komune.s2:s2-spring-boot-starter-sourcing-ssm:${Versions.s2}",
		)
		object Test {
			fun dataFaker(scope: Scope) = scope.add(
				"net.datafaker:datafaker:${Versions.datafaker}",
			)
		}
	}

	object Mpp {
		fun f2(scope: Scope) = scope.add(
			"io.komune.f2:f2-dsl-function:${Versions.f2}",
			"io.komune.f2:f2-dsl-cqrs:${Versions.f2}"
		)

		fun f2Client(scope: Scope) = scope.add(
			"io.komune.f2:f2-client-ktor:${Versions.f2}",
			"io.ktor:ktor-client-auth:${Versions.ktor}",
			"io.ktor:ktor-client-logging:${Versions.ktor}",
		).also {
			FixersDependencies.Jvm.Json.jackson(scope)
		}

		fun fs(scope: Scope) = scope.add(
			"io.komune.fs:fs-file-domain:${Versions.fs}"
		)

		fun im(scope: Scope) = scope.add(
			"io.komune.im:im-organization-domain:${Versions.im}",
			"io.komune.im:im-user-domain:${Versions.im}",
			"io.komune.im:im-commons-auth:${Versions.im}"
		)

		fun bignum(scope: Scope) = scope.add(
			"com.ionspin.kotlin:bignum:${Versions.bignum}"
		)

		object Ktor {
			fun utils(scope: Scope) = scope.add(
				"io.ktor:ktor-utils:${Versions.ktor}",
				"io.ktor:ktor-http:${Versions.ktor}"
			)
		}

		fun s2(scope: Scope) = scope.add(
			"io.komune.s2:s2-automate-dsl:${Versions.s2}",
			"io.komune.s2:s2-event-sourcing-dsl:${Versions.s2}"
		)

		fun documenter(scope: Scope) = scope.add(
			"io.komune.s2:s2-automate-documenter:${Versions.s2}",
		)

		fun test(scope: Scope) = scope.add(
			"org.jetbrains.kotlin:kotlin-test-common:${PluginVersions.kotlin}",
		)

		fun cccevDomain(scope: Scope) = scope.add(
			"io.komune.cccev:cccev-f2-domain:${Versions.cccev}",
		)
	}
}

object Modules {
	const val commons = ":platform:commons"

	object api {
		private const val BASE = ":platform:api:api"
		const val config = "$BASE-config"
	}

	object control {
		private const val BASE = ":platform:control"

		object f2 {
			private const val BASE = "${control.BASE}:f2"

			object activity {
				private const val BASE = "${f2.BASE}:activity-f2:activity-f2"
				const val api = "$BASE-api"
				const val client = "$BASE-client"
				const val domain = "$BASE-domain"
			}

			object dcs {
				private const val BASE = "${f2.BASE}:dcs-f2:dcs-f2"
				const val api = "$BASE-api"
				const val client = "$BASE-client"
				const val domain = "$BASE-domain"
			}
		}

		object infra {
			private const val BASE = "${control.BASE}:infra"
			const val cccev = "$BASE:cccev"
		}
	}

	object data {
		private const val BASE = ":data"

		object dsl {
			private const val BASE = "${data.BASE}:dsl"
			const val client = "$BASE:client"
			const val dcat = "$BASE:dcat"
			const val skos = "$BASE:skos"
			const val structure = "$BASE:structure"
		}

		object f2 {
			private const val BASE = "${data.BASE}:f2"

			object catalogue {
				private const val BASE = "${f2.BASE}:catalogue-f2:catalogue-f2"
				const val api = "$BASE-api"
				const val client = "$BASE-client"
				const val domain = "$BASE-domain"
			}

			object dataset {
				private const val BASE = "${f2.BASE}:dataset-f2:dataset-f2"
				const val api = "$BASE-api"
				const val client = "$BASE-client"
				const val domain = "$BASE-domain"
			}
		}

		object s2 {
			private const val BASE = "${data.BASE}:s2"

			object catalogue {
				private const val BASE = "${s2.BASE}:catalogue:catalogue"
				const val api = "$BASE-api"
				const val domain = "$BASE-domain"
			}

			object dataset {
				private const val BASE = "${s2.BASE}:dataset:dataset"
				const val api = "$BASE-api"
				const val domain = "$BASE-domain"
			}
		}
	}

	object identity {
		private const val BASE = ":platform:identity"

		object f2 {
			private const val BASE = "${identity.BASE}:f2"

			object user {
				private const val BASE = "${f2.BASE}:user-f2:user-f2"
				const val api = "$BASE-api"
				const val domain = "$BASE-domain"
			}
		}
	}

	object infra {
		private const val BASE = ":platform:infra"
		const val brevo = "$BASE:brevo"
		const val fs = "$BASE:fs"
		const val im = "$BASE:im"
		const val pdf = "$BASE:pdf"
		const val redis = "$BASE:redis"
	}

	object project {
		private const val BASE = ":platform:project"

		object f2 {
			private const val BASE = "${Modules.project.BASE}:f2"

			object assertOrder {
				private const val BASE = "${f2.BASE}:assert-order-f2:assert-order-f2"
				const val api = "$BASE-api"
				const val client = "$BASE-client"
				const val domain = "$BASE-domain"
			}

			object assetPool {
				private const val BASE = "${f2.BASE}:asset-pool-f2:asset-pool-f2"
				const val api = "$BASE-api"
				const val client = "$BASE-client"
				const val domain = "$BASE-domain"
			}

			object chat {
				private const val BASE = "${f2.BASE}:chat-f2:chat-f2"
				const val api = "$BASE-api"
				const val client = "$BASE-client"
				const val domain = "$BASE-domain"
			}

			object project {
				private const val BASE = "${f2.BASE}:project-f2:project-f2"
				const val api = "$BASE-api"
				const val client = "$BASE-client"
				const val domain = "$BASE-domain"
			}
		}

		object s2 {
			private const val BASE = "${Modules.project.BASE}:s2"

			object asset {
				private const val BASE = "${s2.BASE}:asset:asset"
				const val api = "$BASE-api"
				const val domain = "$BASE-domain"
			}

			object order {
				private const val BASE = "${s2.BASE}:order:order"
				const val api = "$BASE-api"
				const val domain = "$BASE-domain"
			}

			object project {
				private const val BASE = "${s2.BASE}:project:project"
				const val api = "$BASE-api"
				const val domain = "$BASE-domain"
			}
		}
	}
}
