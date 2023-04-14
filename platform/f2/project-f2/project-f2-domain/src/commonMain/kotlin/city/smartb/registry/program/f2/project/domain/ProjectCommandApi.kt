package city.smartb.registry.program.f2.project.domain

import city.smartb.registry.program.f2.project.domain.command.ProjectCreateFunction
import city.smartb.registry.program.f2.project.domain.command.ProjectDeleteFunction
import city.smartb.registry.program.f2.project.domain.command.ProjectUpdateFunction

interface ProjectCommandApi {
    /** Create a project */
    fun projectCreate(): ProjectCreateFunction
    /** Update a project */
    fun projectUpdate(): ProjectUpdateFunction
    /** Delete a project */
    fun projectDelete(): ProjectDeleteFunction
}
