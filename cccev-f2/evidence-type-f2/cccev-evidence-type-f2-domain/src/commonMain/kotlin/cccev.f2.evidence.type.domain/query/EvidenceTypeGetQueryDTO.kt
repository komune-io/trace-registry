package cccev.f2.evidence.type.domain.query

import cccev.core.evidencetype.model.EvidenceTypeId
import cccev.f2.evidence.type.domain.D2EvidenceTypeF2Page
import cccev.f2.evidence.type.domain.model.EvidenceTypeFlat
import cccev.f2.evidence.type.domain.model.EvidenceTypeFlatDTO
import f2.dsl.fnc.F2Function
import kotlinx.serialization.Serializable
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * Get a data unit by its id.
 * @d2 function
 * @parent [D2EvidenceTypeF2Page]
 */
typealias EvidenceTypeGetFunction = F2Function<EvidenceTypeGetQueryDTOBase, EvidenceTypeGetResultDTOBase>

/**
 * @d2 query
 * @parent [EvidenceTypeGetFunction]
 */
@JsExport
@JsName("EvidenceTypeGetQueryDTO")
interface EvidenceTypeGetQueryDTO {
    /**
     * Identifier of the data unit to get.
     */
    val id: EvidenceTypeId
}

/**
 * @d2 inherit
 */
@Serializable
data class EvidenceTypeGetQueryDTOBase(
    override val id: EvidenceTypeId
): EvidenceTypeGetQueryDTO

/**
 * @d2 result
 * @parent [EvidenceTypeGetFunction]
 */
@JsExport
@JsName("EvidenceTypeGetResultDTO")
interface EvidenceTypeGetResultDTO {
    val item: EvidenceTypeFlatDTO?
    val graph: Any // TODO CccevFlatGraphDTO
}

/**
 * @d2 inherit
 */
//@Serializable
data class EvidenceTypeGetResultDTOBase(
    override val item: EvidenceTypeFlat?,
    override val graph: Any // TODO CccevFlatGraphDTO
): EvidenceTypeGetResultDTO
