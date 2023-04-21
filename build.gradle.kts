plugins {
	kotlin("plugin.jpa") version PluginVersions.kotlin apply false
	kotlin("plugin.spring") version PluginVersions.kotlin apply false
	kotlin("plugin.serialization") version PluginVersions.kotlin apply false
	kotlin("kapt") version PluginVersions.kotlin apply false

	id("org.springframework.boot") version PluginVersions.springBoot apply false

	id("city.smartb.fixers.gradle.config") version PluginVersions.fixers
	id("city.smartb.fixers.gradle.sonar") version PluginVersions.fixers
	id("city.smartb.fixers.gradle.d2") version PluginVersions.fixers
}

allprojects {
	group = "city.smartb.registry"
	version = System.getenv("VERSION") ?: "latest"
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
			from("build/smartb-d2-documenter") {
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
		id = "registry-program-ver"
		name = "Voluntary Emissions Reductions"
		description = "Voluntary Emissions Reduction is a Registry structure designed to be interoperable with the main environmental assets registries of the market."
		url = "https://gitlab.smartb.city/framwork/registry/program"
	}
	d2 {
		outputDirectory = file("storybook/stories/d2/")
	}
//	kt2Ts {
//		additionalCleaning = mapOf(
//			".d.ts" to listOf(
//          		Regex("""string""") to "String"
//		 	)
//		)
//	}
}
