package io.komune.registry.f2.project.domain

import io.komune.registry.f2.project.domain.query.ProjectGetByIdentifierFunction
import io.komune.registry.f2.project.domain.query.ProjectGetFunction
import io.komune.registry.f2.project.domain.query.ProjectListFilesFunction
import io.komune.registry.f2.project.domain.query.ProjectPageFunction

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
