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
interface AssetPoolResumeCommandDTO: AssetPoolCommand {
    /**
     * Id of the pool to resume.
     */
    override val id: AssetPoolId
}

/**
 * @d2 inherit
 */
data class AssetPoolResumeCommand(
    override val id: AssetPoolId
): AssetPoolResumeCommandDTO

@Serializable
data class AssetPoolResumedEvent(
    override val id: AssetPoolId,
    override val date: Long
): AssetPoolEvent
