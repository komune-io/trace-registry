package io.komune.registry.s2.cccev.domain.command.concept

import io.komune.registry.s2.cccev.domain.model.AggregatorType
import io.komune.registry.s2.commons.model.DataUnitId
import io.komune.registry.s2.commons.model.InformationConceptId
import io.komune.registry.s2.commons.model.InformationConceptIdentifier
import io.komune.registry.s2.commons.model.Language
import io.komune.registry.s2.concept.domain.ConceptId
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
interface InformationConceptCreateCommandDTO {
    val identifier: InformationConceptIdentifier
    val name: Map<Language, String>
    val unitId: DataUnitId
    val aggregator: AggregatorType?
    val themeIds: List<ConceptId>
}

@Serializable
data class InformationConceptCreateCommand(
    override val identifier: InformationConceptIdentifier,
    override val name: Map<Language, String>,
    override val unitId: DataUnitId,
    override val aggregator: AggregatorType?,
    override val themeIds: List<ConceptId>
) : InformationConceptInitCommand, InformationConceptCreateCommandDTO

@Serializable
data class InformationConceptCreatedEvent(
    override val id: InformationConceptId,
    override val date: Long,
    val identifier: InformationConceptIdentifier,
    val name: Map<Language, String>,
    val unitId: DataUnitId,
    val aggregator: AggregatorType?,
    val themeIds: Set<ConceptId>
) : InformationConceptEvent
