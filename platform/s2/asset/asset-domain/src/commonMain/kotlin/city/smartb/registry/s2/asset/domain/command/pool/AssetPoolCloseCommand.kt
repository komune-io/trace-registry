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
interface AssetPoolCloseCommandDTO: AssetPoolCommand {
    /**
     * Id of the pool to close.
     */
    override val id: AssetPoolId
}

/**
 * @d2 inherit
 */
data class AssetPoolCloseCommand(
    override val id: AssetPoolId
): AssetPoolCloseCommandDTO

@Serializable
data class AssetPoolClosedEvent(
    override val id: AssetPoolId,
    override val date: Long
): AssetPoolEvent
