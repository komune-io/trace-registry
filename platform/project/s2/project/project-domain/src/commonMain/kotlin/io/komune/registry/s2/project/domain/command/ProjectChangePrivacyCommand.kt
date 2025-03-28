package io.komune.registry.s2.project.domain.command

import io.komune.registry.s2.project.domain.automate.ProjectCommand
import io.komune.registry.s2.project.domain.automate.ProjectEvent
import io.komune.registry.s2.project.domain.model.ProjectId
import kotlin.js.JsExport
import kotlin.js.JsName
import kotlinx.serialization.Serializable

/**
 * @d2 command
 */
@JsExport
@JsName("ProjectChangePrivacyCommandDTO")
interface ProjectChangePrivacyCommandDTO: ProjectCommand

/**
 * @d2 inherit
 */
@Serializable
data class ProjectChangePrivacyCommand(
    override val id: ProjectId,
    val isPrivate: Boolean
): ProjectChangePrivacyCommandDTO

/**
 * @d2 event
 * @parent [D2ProjectUpdateFunction]
 */
@JsExport
@JsName("ProjectChangedPrivacyEventDTO")
interface ProjectChangedPrivacyEventDTO: ProjectEvent {
    /**
     * Identifier of the updated project.
     */
    override val id: ProjectId
    override val date: Long
    val isPrivate: Boolean
}

/**
 * @d2 inherit
 */
@Serializable
data class ProjectChangedPrivacyEvent(
    override val id: ProjectId,
    override val date: Long,
    override val isPrivate: Boolean
): ProjectChangedPrivacyEventDTO
