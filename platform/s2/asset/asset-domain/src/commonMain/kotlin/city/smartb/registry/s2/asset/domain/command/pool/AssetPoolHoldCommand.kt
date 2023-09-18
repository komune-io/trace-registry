package city.smartb.registry.s2.asset.domain.command.pool

import city.smartb.registry.s2.asset.domain.automate.AssetPoolCommand
import city.smartb.registry.s2.asset.domain.automate.AssetPoolEvent
import city.smartb.registry.s2.asset.domain.automate.AssetPoolId
import kotlin.js.JsExport
import kotlinx.serialization.Serializable

/**
 * @d2 command
 */
@JsExport
interface AssetPoolHoldCommandDTO: AssetPoolCommand {
    /**
     * Id of the pool to put on hold.
     */
    override val id: AssetPoolId
}

/**
 * @d2 inherit
 */
data class AssetPoolHoldCommand(
    override val id: AssetPoolId
): AssetPoolHoldCommandDTO

@Serializable
data class AssetPoolHeldEvent(
    override val id: AssetPoolId,
    override val date: Long
): AssetPoolEvent
