subprojects {
	plugins.withType(JavaPlugin::class.java).whenPluginAdded {
		dependencies {
			val implementation by configurations
			if (!project.path.endsWith("-client") && !project.path.endsWith("-domain")) {
				Dependencies.Jvm.f2 { implementation(it) }
				implementation(project(":platform:api:api-config"))
				implementation("city.smartb.s2:s2-spring-boot-starter-utils-logger:${Versions.s2}")
			}
		}
	}

	plugins.withType(org.jetbrains.kotlin.gradle.plugin.KotlinMultiplatformPluginWrapper::class.java).whenPluginAdded {
		dependencies {
			val commonMainApi by configurations
			Dependencies.Mpp.f2 { commonMainApi(it) }
		}
	}
}
