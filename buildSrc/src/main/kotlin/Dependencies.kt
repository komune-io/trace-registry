import io.komune.gradle.dependencies.FixersDependencies
import io.komune.gradle.dependencies.FixersPluginVersions
import io.komune.gradle.dependencies.FixersVersions
import io.komune.gradle.dependencies.Scope
import io.komune.gradle.dependencies.add

object Framework {
	val fixers = FixersPluginVersions.fixers
	val connect = "0.21.0"
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

	const val apacheCsv = "1.14.0"
	const val apacheTika = "3.1.0"
	const val bignum = "0.3.8"
	const val brevo = "1.0.0"
	const val datafaker = "1.8.1"
	const val html2pdf = "5.0.0"
	const val hsqldb = "2.7.4"
	const val jacksonCsv = "2.18.3"
	const val jacksonKotlin = FixersVersions.Json.jacksonKotlin
	const val javaSnapshotTesting = "4.0.8"
	const val jsonPath = "2.9.0"
	const val ktor = FixersVersions.Kotlin.ktor
	const val meilisearch = "0.14.2"
	const val neo4jOgm = "4.0.10"
	const val postgresql = "42.7.4"
	const val r2dbcPostgresql = "1.0.7.RELEASE"
	const val redisOm = "0.8.9"
	const val slack = "1.45.3"
	const val xmlgraphicsBatik = "1.18"
	const val xmlgraphicsFop = "2.10"
	const val zxing = "3.5.3"
}

object Repo {
	val snapshot: List<String> = listOf(
//		"https://s01.oss.sonatype.org/service/local/repositories/releases/content",
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
			"org.springframework.boot:spring-boot-starter-test:${PluginVersions.springBoot}"
		).also(::cucumber)
			.also(::junit)

		fun meilisearch(scope: Scope) = scope.add(
			"com.meilisearch.sdk:meilisearch-java:${Versions.meilisearch}"
		)

		fun neo4j(scope: Scope) = scope.add(
			"org.neo4j:neo4j-ogm-core:${Versions.neo4jOgm}",
			"org.neo4j:neo4j-ogm-bolt-driver:${Versions.neo4jOgm}"
		)

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

//		fun s2Sourcing(scope: Scope) = scope.add(
//			"io.komune.s2:s2-spring-boot-starter-sourcing-ssm:${Versions.s2}",
//		)

		fun s2Sourcing(scope: Scope) = scope.add(
			"io.komune.s2:s2-spring-boot-starter-sourcing-data-r2dbc:${Versions.s2}",
			"org.postgresql:r2dbc-postgresql:${Versions.r2dbcPostgresql}",
			"org.postgresql:postgresql:${Versions.postgresql}",
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

		fun svg(scope: Scope) = scope.add(
			"org.apache.xmlgraphics:batik-transcoder:${Versions.xmlgraphicsBatik}",
			"org.apache.xmlgraphics:fop:${Versions.xmlgraphicsFop}",
			"org.apache.commons:commons-text:1.13.0"
		)

		fun qrcode(scope: Scope) = scope.add(
			"com.google.zxing:core:${Versions.zxing}"
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
	const val sel = ":sel"

	object api {
		private const val BASE = ":platform:api:api"
		const val config = "$BASE-config"
	}

	object control {
		private const val BASE = ":platform:control"

		object core {
			private const val BASE = "${control.BASE}:core"

			object cccev {
				private const val BASE = "${core.BASE}:cccev:cccev"
				const val api = "$BASE-api"
				const val domain = "$BASE-domain"
			}
		}

		object f2 {
			private const val BASE = "${control.BASE}:f2"

			object activity {
				private const val BASE = "${f2.BASE}:activity-f2:activity-f2"
				const val api = "$BASE-api"
				const val client = "$BASE-client"
				const val domain = "$BASE-domain"
			}

			object cccev {
				private const val BASE = "${f2.BASE}:cccev-f2:cccev-f2"
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

			object protocol {
				private const val BASE = "${f2.BASE}:protocol-f2:protocol-f2"
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
		private const val BASE = ":platform:data"

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

			object catalogueDraft {
				private const val BASE = "${f2.BASE}:catalogue-draft-f2:catalogue-draft-f2"
				const val api = "$BASE-api"
				const val client = "$BASE-client"
				const val domain = "$BASE-domain"
			}

			object concept {
				private const val BASE = "${f2.BASE}:concept-f2:concept-f2"
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

			object cccev {
				private const val BASE = "${f2.BASE}:cccev-f2-old:cccev-f2-old"
				const val api = "$BASE-api"
				const val client = "$BASE-client"
				const val domain = "$BASE-domain"
			}

			object license {
				private const val BASE = "${f2.BASE}:license-f2:license-f2"
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

			object catalogueDraft {
				private const val BASE = "${s2.BASE}:catalogue-draft:catalogue-draft"
				const val api = "$BASE-api"
				const val domain = "$BASE-domain"
			}

			object concept {
				private const val BASE = "${s2.BASE}:concept:concept"
				const val api = "$BASE-api"
				const val domain = "$BASE-domain"
			}

			object dataset {
				private const val BASE = "${s2.BASE}:dataset:dataset"
				const val api = "$BASE-api"
				const val domain = "$BASE-domain"
			}

			object cccev {
				private const val BASE = "${s2.BASE}:cccev-old:cccev-old"
				const val api = "$BASE-api"
				const val domain = "$BASE-domain"
			}

			object license {
				private const val BASE = "${s2.BASE}:license:license"
				const val api = "$BASE-api"
				const val domain = "$BASE-domain"
			}
		}
	}

	object global {
		private const val BASE = ":platform:global"

		object f2 {
			private const val BASE = "${global.BASE}:f2"

			object entity {
				private const val BASE = "${f2.BASE}:entity-f2:entity-f2"
				const val api = "$BASE-api"
				const val client = "$BASE-client"
				const val domain = "$BASE-domain"
			}
		}
	}

	object identity {
		private const val BASE = ":platform:identity"

		object f2 {
			private const val BASE = "${identity.BASE}:f2"

			object organization {
				private const val BASE = "${f2.BASE}:organization-f2:organization-f2"
				const val api = "$BASE-api"
				const val domain = "$BASE-domain"
			}

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
		const val meilisearch = "$BASE:meilisearch"
		const val neo4j = "$BASE:neo4j"
		const val pdf = "$BASE:pdf"
		const val postgresql = "$BASE:postgresql"
		const val redis = "$BASE:redis"
		const val slack = "$BASE:slack"
		const val svg = "$BASE:svg"
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

	object script {
		private const val BASE = ":platform:script:script"

		const val import = "$BASE-import"
		const val init = "$BASE-init"
	}
}
