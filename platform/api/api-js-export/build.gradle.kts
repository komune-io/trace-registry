plugins {
	id("io.komune.fixers.gradle.kotlin.mpp")
	kotlin("plugin.serialization")
}

dependencies {
    project(":platform").dependencyProject.subprojects.forEach {
        if ("-domain" in it.name && ":platform:project" !in it.toString()) { // exclude unused project module to reduce generated js size
            jsMainApi(it)
        }
    }
    jsMainApi(project(Modules.sel))
}
