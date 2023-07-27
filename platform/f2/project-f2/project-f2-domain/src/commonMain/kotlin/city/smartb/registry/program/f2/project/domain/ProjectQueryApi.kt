package city.smartb.registry.program.f2.project.domain

import city.smartb.registry.program.f2.project.domain.query.ProjectGetFunction
import city.smartb.registry.program.f2.project.domain.query.ProjectGetByIdentifierFunction
import city.smartb.registry.program.f2.project.domain.query.ProjectListFilesFunction
import city.smartb.registry.program.f2.project.domain.query.ProjectPageFunction

interface ProjectQueryApi {
    /** Get a project by identifier */
    fun projectGetByIdentifier(): ProjectGetByIdentifierFunction
    /** Get a project by id */
    fun projectGet(): ProjectGetFunction

    /** Get a page of projects */
    fun projectPage(): ProjectPageFunction

    /** List all files of a project */
    fun projectListFiles(): ProjectListFilesFunction
}
