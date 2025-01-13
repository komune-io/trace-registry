package io.komune.registry.f2.project.domain

import io.komune.registry.f2.project.domain.command.ProjectAddAssetPoolFunction
import io.komune.registry.f2.project.domain.command.ProjectChangePrivacyFunction
import io.komune.registry.f2.project.domain.command.ProjectCreateFunction
import io.komune.registry.f2.project.domain.command.ProjectDeleteFunction
import io.komune.registry.f2.project.domain.command.ProjectUpdateFunction

interface ProjectCommandApi {
    /** Create a project */
    fun projectCreate(): ProjectCreateFunction

    /** Update a project */
    fun projectUpdate(): ProjectUpdateFunction

    /** Update a project */
    fun projectAddAssetPool(): ProjectAddAssetPoolFunction

    /** Update a project */
    fun projectChangePrivacy(): ProjectChangePrivacyFunction

    /** Delete a project */
    fun projectDelete(): ProjectDeleteFunction
}
