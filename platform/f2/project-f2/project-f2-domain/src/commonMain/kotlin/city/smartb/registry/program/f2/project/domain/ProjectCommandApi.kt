package city.smartb.registry.program.f2.project.domain

import city.smartb.registry.program.f2.project.domain.command.ProjectCreateFunction
import city.smartb.registry.program.f2.project.domain.command.ProjectDeleteFunction
import city.smartb.registry.program.f2.project.domain.command.ProjectUpdateFunction

interface ProjectCommandApi {
    /**
     * Create Project
     */
    fun projectCreate(): ProjectCreateFunction

    /**
     * Update Project
     */
    fun projectUpdate(): ProjectUpdateFunction
    fun projectDelete(): ProjectDeleteFunction
}
