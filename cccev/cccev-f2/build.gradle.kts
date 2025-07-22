plugins {
    id("city.smartb.fixers.gradle.kotlin.mpp")
    id("city.smartb.fixers.gradle.publish")
    kotlin("plugin.serialization")
    kotlin("plugin.spring")
}

dependencies {
    commonMainApi(project(Modules.api.commons))
    commonMainApi(project(Modules.cccev.core))
    Dependencies.Mpp.f2(::commonMainApi)

    jvmMainImplementation(project(Modules.cccev.infra.fs))
    Dependencies.Jvm.f2(::jvmMainImplementation)
}

subprojects {
    plugins.withType(JavaPlugin::class.java).whenPluginAdded {
        dependencies {
            val implementation by configurations
            implementation(project(Modules.api.commons))
            Dependencies.Jvm.f2 { implementation(it) }
        }
    }

    plugins.withType(org.jetbrains.kotlin.gradle.plugin.KotlinMultiplatformPluginWrapper::class.java).whenPluginAdded {
        dependencies {
            val commonMainApi by configurations
            Dependencies.Mpp.f2 { commonMainApi(it) }
        }
    }
}
