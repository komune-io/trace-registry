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
		maven { url = uri("https://oss.sonatype.org/service/local/repositories/releases/content") }
		Repo.snapshot.forEach {
			maven { url = uri(it) }
		}
	}
}

fixers {
	bundle {
		id = "registry-program-ver"
		name = "Voluntary Emissions Reductions"
		description = "Voluntary Emissions Reduction is a Registry structure designed to be interoperable with the main environnemental assets registries of the market."
		url = "https://gitlab.smartb.city/framwork/registry/program"
	}
}