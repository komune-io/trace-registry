package cccev.f2.concept.domain.query

import cccev.f2.concept.domain.D2InformationConceptF2Page
import cccev.f2.concept.domain.model.InformationConceptFlat
import cccev.f2.concept.domain.model.InformationConceptFlatDTO
import f2.dsl.fnc.F2Function
import kotlinx.serialization.Serializable
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * Get an information concept by its identifier.
 * @d2 function
 * @parent [D2InformationConceptF2Page]
 */
typealias InformationConceptGetByIdentifierFunction
        = F2Function<InformationConceptGetByIdentifierQueryDTOBase, InformationConceptGetByIdentifierResultDTOBase>

/**
 * @d2 query
 * @parent [InformationConceptGetByIdentifierFunction]
 */
@JsExport
@JsName("InformationConceptGetByIdentifierQueryDTO")
interface InformationConceptGetByIdentifierQueryDTO {
    /**
     * Identifier of the information concept to get.
     */
    val identifier: String
}

/**
 * @d2 inherit
 */
@Serializable
data class InformationConceptGetByIdentifierQueryDTOBase(
    override val identifier: String
): InformationConceptGetByIdentifierQueryDTO

/**
 * @d2 result
 * @parent [InformationConceptGetByIdentifierFunction]
 */
@JsExport
@JsName("InformationConceptGetByIdentifierResultDTO")
interface InformationConceptGetByIdentifierResultDTO {
    val item: InformationConceptFlatDTO?
    val graph: Any // TODO CccevFlatGraphDTO
}

/**
 * @d2 inherit
 */
//@Serializable
data class InformationConceptGetByIdentifierResultDTOBase(
    override val item: InformationConceptFlat?,
    override val graph: Any // TODO CccevFlatGraph
): InformationConceptGetByIdentifierResultDTO
