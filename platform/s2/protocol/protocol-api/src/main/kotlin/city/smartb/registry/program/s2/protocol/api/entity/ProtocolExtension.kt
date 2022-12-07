package city.smartb.registry.program.s2.protocol.api.entity

import city.smartb.registry.program.s2.protocol.domain.command.ProtocolUpdateCommand
import city.smartb.registry.program.s2.protocol.domain.model.Protocol

fun ProtocolEntity.toProtocol() = Protocol(
    id = this.id,
    status = this.status,
    name = this.name,
    baseScenario = this.baseScenario,
    context = this.context,
    expectedValue = this.expectedValue,
    expectedValueUnit = this.expectedValueUnit,
    methodology = this.methodology,
    monitoringPeriodStart = this.monitoringPeriodStart,
    monitoringPeriodEnd = this.monitoringPeriodEnd,
    poaId = this.poaId,
    productType = this.productType,
    programOfActivities = this.programOfActivities,
    project = this.project,
    projectVVB = this.projectVVB,
    protocolType = this.protocolType,
    sdg = this.sdg,
    slug = this.slug,
    creationDate = this.creationDate?.toInstant()?.epochSecond,
    lastModificationDate = this.lastModificationDate?.toInstant()?.epochSecond
)

fun ProtocolUpdateCommand.toProtocol() = ProtocolEntity().applyCmd(this)
fun ProtocolEntity.applyCmd(cmd: ProtocolUpdateCommand): ProtocolEntity = apply {
    this.id = cmd.id
    this.name = cmd.name
    this.baseScenario = cmd.baseScenario
    this.context = cmd.context
    this.expectedValue = cmd.expectedValue
    this.expectedValueUnit = cmd.expectedValueUnit
    this.methodology = cmd.methodology
    this.monitoringPeriodStart = cmd.monitoringPeriodStart
    this.monitoringPeriodEnd = cmd.monitoringPeriodEnd
    this.poaId = cmd.poaId
    this.productType = cmd.productType
    this.programOfActivities = cmd.programOfActivities
    this.project = cmd.project
    this.projectVVB = cmd.projectVVB
    this.protocolType = cmd.protocolType
    this.sdg = cmd.sdg
    this.slug = cmd.slug
}
