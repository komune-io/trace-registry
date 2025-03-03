plugins {
	kotlin("plugin.jpa") version PluginVersions.kotlin apply false
	kotlin("plugin.spring") version PluginVersions.kotlin apply false
	kotlin("plugin.serialization") version PluginVersions.kotlin apply false
	kotlin("kapt") version PluginVersions.kotlin apply false

	id("org.springframework.boot") version PluginVersions.springBoot apply false

	id("io.komune.fixers.gradle.config") version PluginVersions.fixers
	id("io.komune.fixers.gradle.check") version PluginVersions.fixers
	id("io.komune.fixers.gradle.d2") version PluginVersions.fixers
}

allprojects {
	group = "io.komune.registry"
	version = System.getenv("VERSION") ?: "experimental-SNAPSHOT"
	repositories {
		mavenLocal()
		mavenCentral()
		Repo.snapshot.forEach {
			maven { url = uri(it) }
		}
	}
}

subprojects {
	tasks {
		register("documenter", Copy::class) {
			from("build/komune-d2-documenter") {
				include("**/*.json")
			}

			logger.info("///////////////////////////////")
			logger.info("${rootDir}/storybook/stories/asset")
			logger.info("///////////////////////////////")
			into("${rootDir}/storybook/stories/asset")
		}
	}
}


fixers {
	bundle {
		id = "registry"
		name = "Registry"
		description = "Voluntary Emissions Reduction is a Registry structure designed to be interoperable with the main environmental assets registries of the market."
		url = "https://github.com/komune-io/registry/program"
	}
	d2 {
		outputDirectory = file("storybook/stories/d2/")
	}
	sonar {
		organization = "komune-io"
		projectKey = "komune-io_trace-registry"
	}
	kt2Ts {
		inputDirectory = "build/js/packages/registry-platform-api-api-js-export"
		outputDirectory = "platform/web/kotlin/registry-platform-api-api-js-export"
		additionalCleaning = mapOf(
			".d.ts" to listOf(
          		Regex("""com\.ionspin\.kotlin\.bignum\.decimal\.BigDecimal""") to "number",
		 	)
		)
	}
}
