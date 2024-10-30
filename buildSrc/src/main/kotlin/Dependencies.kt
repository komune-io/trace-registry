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
//    val cccev = Framework.connect
    val cccev = "0.21.0-local5-SNAPSHOT"

	const val bignum = "0.3.8"
	const val datafaker = "1.8.1"
	const val jacksonKotlin = FixersVersions.Json.jacksonKotlin
	const val ktor = FixersVersions.Kotlin.ktor
	const val redisOm = "0.8.9"
	const val html2pdf = "5.0.0"
	const val javaSnapshotTesting = "4.0.7"
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

		fun f2(scope: Scope) = scope.add(
			"io.komune.f2:f2-spring-boot-starter-function-http:${Versions.f2}",
		)
		fun f2OpenApi(scope: Scope) = scope.add(
			"io.komune.f2:f2-spring-boot-openapi:${Versions.f2}"
		)

		fun f2Auth(scope: Scope) = scope.add(
			"io.komune.f2:f2-spring-boot-starter-auth-tenant:${Versions.im}",
			"io.komune.im:im-commons-auth:${Versions.im}"
		)

		fun im(scope: Scope) = scope.add(
			"io.komune.im:im-organization-client:${Versions.im}",
			"io.komune.im:im-user-client:${Versions.im}",
			"io.komune.im:im-apikey-client:${Versions.im}",
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
				"io.ktor:ktor-utils:${Versions.ktor}"
			)
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
			"io.komune.im:im-user-domain:${Versions.im}"
		)

		fun bignum(scope: Scope) = scope.add(
			"com.ionspin.kotlin:bignum:${Versions.bignum}"
		)


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
