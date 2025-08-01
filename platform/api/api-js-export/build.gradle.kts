plugins {
	id("io.komune.fixers.gradle.kotlin.mpp")
	kotlin("plugin.serialization")
}

dependencies {
    project(":platform").dependencyProject.subprojects.forEach {
        if ("-domain" in it.name) {
            jsMainApi(it)
        }
    }
    jsMainApi(project(Modules.sel))
}
