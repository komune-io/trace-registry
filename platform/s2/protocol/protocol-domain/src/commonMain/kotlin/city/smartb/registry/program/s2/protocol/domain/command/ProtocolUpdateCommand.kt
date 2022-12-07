package city.smartb.registry.program.s2.protocol.domain.command

import city.smartb.registry.program.s2.protocol.domain.automate.ProtocolCommand
import city.smartb.registry.program.s2.protocol.domain.automate.ProtocolEvent
import city.smartb.registry.program.s2.protocol.domain.automate.ProtocolInitCommand
import city.smartb.registry.program.s2.protocol.domain.automate.ProtocolState
import city.smartb.registry.program.s2.protocol.domain.model.DateTime
import city.smartb.registry.program.s2.protocol.domain.model.ProjectRef
import city.smartb.registry.program.s2.protocol.domain.model.ProtocolDTO
import city.smartb.registry.program.s2.protocol.domain.model.ProtocolId
import kotlin.js.JsExport
import kotlin.js.JsName


/**
 * @d2 command
 * @parent [city.smartb.registry.program.s2.protocol.domain.D2ProtocolSectionApi]
 */
@JsExport
@JsName("ProtocolUpdateCommandDTO")
interface ProtocolUpdateCommandDTO: ProtocolCommand, ProtocolInitCommand, ProtocolDTO {
    override val id: ProtocolId
}

/**
 * @d2 inherit
 */
data class ProtocolUpdateCommand(
    override val id: ProtocolId,
    override val status: ProtocolState,
    override val baseScenario: String?,
    override val context: String?,
    override val expectedValue: Double?,
    override val expectedValueUnit: String?,
    override val methodology: String?,
    override val monitoringPeriodStart: DateTime?,
    override val monitoringPeriodEnd: DateTime?,
    override val name: String?,
    override val poaId: String?,
    override val productType: String?,
    override val programOfActivities: String?,
    override val project: ProjectRef?,
    override val projectVVB: String?,
    override val protocolType: String?,
    override val sdg: List<String>?,
    override val slug: String?,
    override val creationDate: DateTime?,
    override val lastModificationDate: DateTime?
): ProtocolUpdateCommandDTO




/**
 * @d2 event
 * @parent [city.smartb.registry.program.s2.protocol.domain.D2ProtocolSectionApi]
 */
@JsExport
@JsName("ProtocolUpdatedEventDTO")
interface ProtocolUpdatedEventDTO: ProtocolEvent {
    override val id: ProtocolId
}

/**
 * @d2 inherit
 */
data class ProtocolUpdatedEvent(
    override val id: ProtocolId,
): ProtocolUpdatedEventDTO
