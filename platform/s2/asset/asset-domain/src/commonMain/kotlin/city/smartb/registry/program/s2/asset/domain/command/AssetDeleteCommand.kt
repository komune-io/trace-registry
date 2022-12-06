package city.smartb.registry.program.s2.asset.domain.command

import city.smartb.registry.program.s2.asset.domain.automate.AssetCommand
import city.smartb.registry.program.s2.asset.domain.automate.AssetEvent
import city.smartb.registry.program.s2.asset.domain.model.AssetId
import i2.keycloak.f2.user.domain.model.UserId
import kotlinx.serialization.Serializable
import kotlin.js.JsExport
import kotlin.js.JsName

data class AssetDeleteCommand(
    override val id: AssetId,
    val deletedBy: UserId
): AssetCommand

/**
 * @d2 event
 * @parent [AssetDeleteFunction]
 */
@JsExport
@JsName("AssetDeletedEventDTO")
interface AssetDeletedEventDTO: AssetEvent {
    /**
     * Identifier of the deleted asset.
     */
    override val id: AssetId
}

@Serializable
data class AssetDeletedEvent(
    override val id: AssetId,
): AssetDeletedEventDTO
