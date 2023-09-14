subprojects {
    plugins.withType(JavaPlugin::class.java).whenPluginAdded {
        dependencies {
            if (!project.path.endsWith("-client") && !project.path.endsWith("-domain")) {
                val implementation by configurations
                implementation(project(":platform:api:api-commons"))
                implementation(project(":platform:api:api-config"))
                implementation("city.smartb.s2:s2-spring-boot-starter-utils-logger:${Versions.s2}")
            }
        }
    }

    plugins.withType(org.jetbrains.kotlin.gradle.plugin.KotlinMultiplatformPluginWrapper::class.java).whenPluginAdded {
        dependencies {
            val commonMainApi by configurations
            Dependencies.Mpp.f2 { commonMainApi(it) }
            Dependencies.Mpp.s2 { commonMainApi(it) }
            Dependencies.Mpp.im { commonMainApi(it) }
        }
    }
}
