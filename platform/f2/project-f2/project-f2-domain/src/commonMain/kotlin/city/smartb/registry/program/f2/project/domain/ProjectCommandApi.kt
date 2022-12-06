package city.smartb.registry.program.f2.project.domain

import city.smartb.registry.program.f2.project.domain.command.ProjectCreateFunction
import city.smartb.registry.program.f2.project.domain.command.ProjectUpdateFunction

interface ProjectCommandApi {
    fun projectCreate(): ProjectCreateFunction
    fun projectUpdate(): ProjectUpdateFunction
//    fun projectDelete(): ProjectDeleteFunction
}
