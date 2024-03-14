package cccev.f2.concept.domain.query

import cccev.core.concept.model.InformationConceptId
import cccev.f2.concept.domain.D2InformationConceptF2Page
import cccev.f2.concept.domain.model.InformationConceptFlat
import cccev.f2.concept.domain.model.InformationConceptFlatDTO
import f2.dsl.fnc.F2Function
import kotlinx.serialization.Serializable
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * Get an information concept by its id.
 * @d2 function
 * @parent [D2InformationConceptF2Page]
 */
typealias InformationConceptGetFunction = F2Function<InformationConceptGetQueryDTOBase, InformationConceptGetResultDTOBase>

/**
 * @d2 query
 * @parent [InformationConceptGetFunction]
 */
@JsExport
@JsName("InformationConceptGetQueryDTO")
interface InformationConceptGetQueryDTO {
    /**
     * Identifier of the information concept to get.
     */
    val id: InformationConceptId
}

/**
 * @d2 inherit
 */
@Serializable
data class InformationConceptGetQueryDTOBase(
    override val id: InformationConceptId
): InformationConceptGetQueryDTO

/**
 * @d2 result
 * @parent [InformationConceptGetFunction]
 */
@JsExport
@JsName("InformationConceptGetResultDTO")
interface InformationConceptGetResultDTO {
    val item: InformationConceptFlatDTO?
    val graph: Any // TODO CccevFlatGraphDTO
}

/**
 * @d2 inherit
 */
//@Serializable
data class InformationConceptGetResultDTOBase(
    override val item: InformationConceptFlat?,
    override val graph: Any // TODO CccevFlatGraph
): InformationConceptGetResultDTO
