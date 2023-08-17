package city.smartb.registry.program.s2.project.domain.command

import city.smartb.registry.program.s2.asset.domain.automate.AssetPoolId
import city.smartb.registry.program.s2.project.domain.automate.ProjectCommand
import city.smartb.registry.program.s2.project.domain.automate.ProjectEvent
import city.smartb.registry.program.s2.project.domain.model.ProjectId
import kotlin.js.JsExport
import kotlin.js.JsName
import kotlinx.serialization.Serializable

/**
 * @d2 command
 */
@JsExport
@JsName("ProjectAddAssetPoolCommandDTO")
interface ProjectAddAssetPoolCommandDTO: ProjectCommand

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

@Serializable
data class ProjectAddedAssetPoolEvent(
    override val id: ProjectId,
    override val date: Long,
    override val poolId: AssetPoolId
): ProjectAddedAssetPoolEventDTO
