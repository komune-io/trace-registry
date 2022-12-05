package city.smartb.registry.program.f2.project.domain

import city.smartb.registry.program.f2.project.domain.command.ProjectCreateFunction
import city.smartb.registry.program.f2.project.domain.command.ProjectDeleteFunction
import city.smartb.registry.program.f2.project.domain.command.ProjectUpdateDetailsFunction

interface ProjectCommandApi {
    fun projectCreate(): ProjectCreateFunction
    fun projectUpdateDetails(): ProjectUpdateDetailsFunction
    fun projectDelete(): ProjectDeleteFunction
}
