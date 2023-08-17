package city.smartb.registry.program.f2.project.domain

import city.smartb.registry.program.f2.project.domain.command.ProjectAddAssetPoolFunction
import city.smartb.registry.program.f2.project.domain.command.ProjectCreateFunction
import city.smartb.registry.program.f2.project.domain.command.ProjectDeleteFunction
import city.smartb.registry.program.f2.project.domain.command.ProjectUpdateFunction

interface ProjectCommandApi {
    /** Create a project */
    fun projectCreate(): ProjectCreateFunction

    /** Update a project */
    fun projectUpdate(): ProjectUpdateFunction

    /** Update a project */
    fun projectAddAssetPool(): ProjectAddAssetPoolFunction

    /** Delete a project */
    fun projectDelete(): ProjectDeleteFunction
}
