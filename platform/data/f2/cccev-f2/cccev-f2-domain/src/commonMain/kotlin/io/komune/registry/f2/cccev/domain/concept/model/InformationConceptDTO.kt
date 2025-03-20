package io.komune.registry.f2.cccev.domain.concept.model

import io.komune.registry.f2.cccev.domain.unit.model.DataUnitDTO
import io.komune.registry.f2.cccev.domain.unit.model.DataUnitDTOBase
import io.komune.registry.s2.commons.model.InformationConceptId
import io.komune.registry.s2.commons.model.InformationConceptIdentifier
import io.komune.registry.s2.commons.model.Language
import kotlin.js.JsExport

@JsExport
interface InformationConceptDTO {
    val id: InformationConceptId
    val identifier: InformationConceptIdentifier
    val name: Map<Language, String>
    val unit: DataUnitDTO
}

data class InformationConceptDTOBase(
    override val id: InformationConceptId,
    override val identifier: InformationConceptIdentifier,
    override val name: Map<Language, String>,
    override val unit: DataUnitDTOBase
) : InformationConceptDTO
