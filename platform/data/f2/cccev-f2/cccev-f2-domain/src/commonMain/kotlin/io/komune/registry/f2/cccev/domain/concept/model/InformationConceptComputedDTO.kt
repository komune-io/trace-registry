package io.komune.registry.f2.cccev.domain.concept.model

import io.komune.registry.f2.cccev.domain.unit.model.CompositeDataUnitTranslatedDTO
import io.komune.registry.f2.cccev.domain.unit.model.CompositeDataUnitTranslatedDTOBase
import io.komune.registry.f2.concept.domain.model.ConceptTranslatedDTOBase
import io.komune.registry.s2.commons.model.InformationConceptId
import io.komune.registry.s2.commons.model.InformationConceptIdentifier
import io.komune.registry.s2.commons.model.Language
import io.komune.registry.s2.commons.model.SupportedValueId
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
interface InformationConceptComputedDTO : InformationConceptTranslatedDTO {
    override val unit: CompositeDataUnitTranslatedDTO
    val isRange: Boolean
    val valueId: SupportedValueId
    val value: String
    val valueDescription: String?
}

@Serializable
data class InformationConceptComputedDTOBase(
    override val id: InformationConceptId,
    override val identifier: InformationConceptIdentifier,
    override val language: Language,
    override val name: String?,
    override val unit: CompositeDataUnitTranslatedDTOBase,
    override val themes: List<ConceptTranslatedDTOBase>,
    override val isRange: Boolean,
    override val valueId: SupportedValueId,
    override val value: String,
    override val valueDescription: String?
) : InformationConceptComputedDTO
