package city.smartb.registry.program.s2.asset.domain.command

import city.smartb.im.commons.model.Address
import city.smartb.im.organization.domain.model.OrganizationId
import city.smartb.registry.program.s2.asset.domain.automate.AssetEvent
import city.smartb.registry.program.s2.asset.domain.automate.AssetInitCommand
import city.smartb.registry.program.s2.asset.domain.model.AssetId
import i2.keycloak.f2.user.domain.model.UserId
import kotlin.js.JsExport
import kotlin.js.JsName
import kotlinx.serialization.Serializable

data class AssetCreateCommand(
    val createdBy: UserId
): AssetInitCommand

@JsExport
@JsName("AssetCreatedEventDTO")
interface AssetCreatedEventDTO: AssetEvent {
    override val id: AssetId
}

@Serializable
data class AssetCreatedEvent(
    override val id: AssetId,
): AssetCreatedEventDTO
