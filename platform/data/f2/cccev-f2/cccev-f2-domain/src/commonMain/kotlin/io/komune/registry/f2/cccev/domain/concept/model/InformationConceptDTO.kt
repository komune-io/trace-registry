package io.komune.registry.f2.cccev.domain.concept.model

import io.komune.registry.f2.cccev.domain.unit.model.CompositeDataUnitDTO
import io.komune.registry.f2.cccev.domain.unit.model.CompositeDataUnitDTOBase
import io.komune.registry.f2.concept.domain.model.ConceptDTO
import io.komune.registry.f2.concept.domain.model.ConceptDTOBase
import io.komune.registry.s2.commons.model.InformationConceptId
import io.komune.registry.s2.commons.model.InformationConceptIdentifier
import io.komune.registry.s2.commons.model.Language
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
interface InformationConceptDTO {
    val id: InformationConceptId
    val identifier: InformationConceptIdentifier
    val name: Map<Language, String>
    val unit: CompositeDataUnitDTO?
    val themes: List<ConceptDTO>
}

@Serializable
data class InformationConceptDTOBase(
    override val id: InformationConceptId,
    override val identifier: InformationConceptIdentifier,
    override val name: Map<Language, String>,
    override val unit: CompositeDataUnitDTOBase?,
    override val themes: List<ConceptDTOBase>
) : InformationConceptDTO
