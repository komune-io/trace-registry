package io.komune.registry.f2.cccev.domain.concept.model

import io.komune.registry.f2.cccev.domain.unit.model.DataUnitTranslatedDTOBase
import io.komune.registry.s2.commons.model.InformationConceptId
import io.komune.registry.s2.commons.model.InformationConceptIdentifier
import io.komune.registry.s2.commons.model.Language
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
interface InformationConceptComputedDTO : InformationConceptTranslatedDTO {
    val value: String?
    val valueDescription: String?
}

@Serializable
data class InformationConceptComputedDTOBase(
    override val id: InformationConceptId,
    override val identifier: InformationConceptIdentifier,
    override val language: Language,
    override val name: String?,
    override val unit: DataUnitTranslatedDTOBase,
    override val value: String?,
    override val valueDescription: String?
) : InformationConceptComputedDTO
