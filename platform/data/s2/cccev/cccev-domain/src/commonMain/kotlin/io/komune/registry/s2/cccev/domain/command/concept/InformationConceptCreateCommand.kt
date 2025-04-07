package io.komune.registry.s2.cccev.domain.command.concept

import io.komune.registry.s2.cccev.domain.model.AggregatorConfig
import io.komune.registry.s2.cccev.domain.model.AggregatorConfigDTO
import io.komune.registry.s2.cccev.domain.model.CompositeDataUnitModel
import io.komune.registry.s2.cccev.domain.model.CompositeDataUnitRefDTO
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
    val unit: CompositeDataUnitRefDTO?
    val aggregator: AggregatorConfigDTO?
    val themeIds: List<ConceptId>
}

@Serializable
data class InformationConceptCreateCommand(
    override val identifier: InformationConceptIdentifier,
    override val name: Map<Language, String>,
    override val unit: CompositeDataUnitModel?,
    override val aggregator: AggregatorConfig?,
    override val themeIds: List<ConceptId>
) : InformationConceptInitCommand, InformationConceptCreateCommandDTO

@Serializable
data class InformationConceptCreatedEvent(
    override val id: InformationConceptId,
    override val date: Long,
    val identifier: InformationConceptIdentifier,
    val name: Map<Language, String>,
    val unit: CompositeDataUnitModel?,
    val aggregator: AggregatorConfig?,
    val themeIds: Set<ConceptId>
) : InformationConceptEvent
