package io.komune.registry.f2.cccev.domain.concept.model

import io.komune.registry.f2.cccev.domain.unit.model.CompositeDataUnitTranslatedDTO
import io.komune.registry.f2.cccev.domain.unit.model.CompositeDataUnitTranslatedDTOBase
import io.komune.registry.f2.concept.domain.model.ConceptTranslatedDTO
import io.komune.registry.f2.concept.domain.model.ConceptTranslatedDTOBase
import io.komune.registry.s2.commons.model.InformationConceptId
import io.komune.registry.s2.commons.model.InformationConceptIdentifier
import io.komune.registry.s2.commons.model.Language
import kotlin.js.JsExport

@JsExport
interface InformationConceptTranslatedDTO {
    val id: InformationConceptId
    val identifier: InformationConceptIdentifier
    val language: Language
    val name: String?
    val unit: CompositeDataUnitTranslatedDTO?
    val themes: List<ConceptTranslatedDTO>
}

data class InformationConceptTranslatedDTOBase(
    override val id: InformationConceptId,
    override val identifier: InformationConceptIdentifier,
    override val language: Language,
    override val name: String?,
    override val unit: CompositeDataUnitTranslatedDTOBase?,
    override val themes: List<ConceptTranslatedDTOBase>
) : InformationConceptTranslatedDTO
