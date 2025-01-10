package io.komune.registry.s2.asset.domain.command.pool

import cccev.dsl.model.InformationConcept
import io.komune.registry.s2.asset.domain.automate.AssetPoolEvent
import io.komune.registry.s2.asset.domain.automate.AssetPoolId
import io.komune.registry.s2.asset.domain.automate.AssetPoolInitCommand
import io.komune.registry.s2.asset.domain.automate.AssetPoolState
import kotlinx.serialization.Serializable

data class AssetPoolUpdateCommand(
    val vintage: String?,
    val indicator: InformationConcept,
    val granularity: Double,
    val metadata: Map<String, String>?
): AssetPoolInitCommand

@Serializable
data class AssetPoolUpdatedEvent(
    override val id: AssetPoolId,
    override val date: Long,
    val status: AssetPoolState,
    val vintage: String?,
    val indicator: InformationConcept,
    val granularity: Double,
    val metadata: Map<String, String>
): AssetPoolEvent
