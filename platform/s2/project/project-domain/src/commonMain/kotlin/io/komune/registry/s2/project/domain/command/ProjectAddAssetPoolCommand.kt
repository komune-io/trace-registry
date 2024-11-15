package io.komune.registry.s2.project.domain.command

import io.komune.registry.s2.asset.domain.automate.AssetPoolId
import io.komune.registry.s2.project.domain.automate.ProjectCommand
import io.komune.registry.s2.project.domain.automate.ProjectEvent
import io.komune.registry.s2.project.domain.model.ProjectId
import kotlin.js.JsExport
import kotlin.js.JsName
import kotlinx.serialization.Serializable

/**
 * @d2 command
 * @parent [D2ProjectUpdateFunction]
 */
@JsExport
@JsName("ProjectAddAssetPoolCommandDTO")
interface ProjectAddAssetPoolCommandDTO: ProjectCommand

/**
 * @d2 inherit
 */
@Serializable
data class ProjectAddAssetPoolCommand(
    override val id: ProjectId,
    val poolId: AssetPoolId
): ProjectAddAssetPoolCommandDTO

/**
 * @d2 event
 * @parent [D2ProjectUpdateFunction]
 */
@JsExport
@JsName("ProjectAddedAssetPoolEventDTO")
interface ProjectAddedAssetPoolEventDTO: ProjectEvent {
    /**
     * Identifier of the updated project.
     */
    override val id: ProjectId
    override val date: Long
    val poolId: AssetPoolId
}

/**
 * @d2 inherit
 */
@Serializable
data class ProjectAddedAssetPoolEvent(
    override val id: ProjectId,
    override val date: Long,
    override val poolId: AssetPoolId
): ProjectAddedAssetPoolEventDTO
