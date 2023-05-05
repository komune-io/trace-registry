package city.smartb.registry.program.s2.project.domain.command

import city.smartb.registry.program.s2.asset.domain.automate.AssetPoolId
import city.smartb.registry.program.s2.project.domain.automate.ProjectCommand
import city.smartb.registry.program.s2.project.domain.automate.ProjectEvent
import city.smartb.registry.program.s2.project.domain.model.ProjectId
import kotlinx.serialization.Serializable

data class ProjectAddAssetPoolCommand(
    override val id: ProjectId,
    val poolId: AssetPoolId
): ProjectCommand

@Serializable
data class ProjectAddedAssetPoolEvent(
    override val id: ProjectId,
    override val date: Long,
    val poolId: AssetPoolId
): ProjectEvent
