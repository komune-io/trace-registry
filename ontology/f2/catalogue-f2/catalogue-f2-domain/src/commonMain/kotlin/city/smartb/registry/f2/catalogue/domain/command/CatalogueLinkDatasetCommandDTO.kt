package city.smartb.registry.f2.catalogue.domain.command

import city.smartb.registry.s2.catalogue.domain.automate.CatalogueId
import city.smartb.registry.s2.catalogue.domain.command.DatasetId
import f2.dsl.cqrs.Event
import f2.dsl.fnc.F2Function
import kotlin.js.JsExport
import kotlin.js.JsName
import kotlinx.serialization.Serializable

/**
 * Create a catalogue.
 * @d2 function
 * @parent [city.smartb.registry.f2.catalogue.domain.D2CatalogueF2Page]
 * @order 10
 */
typealias CatalogueLinkDatasetsFunction = F2Function<
        CatalogueLinkDatasetsCommandDTOBase,
        CatalogueLinkedDatasetsEventDTOBase
        >

/**
 * @d2 command
 * @parent [CatalogueLinkDatasetsFunction]
 */
@JsExport
@JsName("CatalogueLinkDatasetsCommandDTO")
interface CatalogueLinkDatasetsCommandDTO {
    /**
     * Id of the catalogue to add sub-catalogues to.
     */
    val id: CatalogueId

    /**
     * Ids of the sub-catalogues to add.
     * @example [["8e411870-9a8c-4d7a-91b6-496148c6f5c5", "f31cf8df-44f2-4fef-bc20-09a173032bb2"]]
     */
    val datasets: List<DatasetId>
}

/**
 * @d2 inherit
 */
@Serializable
data class CatalogueLinkDatasetsCommandDTOBase(
    override val id: CatalogueId,
    override val datasets: List<DatasetId>
): CatalogueLinkDatasetsCommandDTO

/**
 * @d2 event
 * @parent [CatalogueLinkDatasetsFunction]
 */
@JsExport
@JsName("CatalogueLinkDatasetsEventDTO")
interface CatalogueLinkedDatasetsEventDTO: Event {
    /**
     * Id of the catalogue to add sub-catalogues to.
     */
    val id: CatalogueId

    /**
     * Ids of the sub-catalogues to add.
     * @example [["8e411870-9a8c-4d7a-91b6-496148c6f5c5", "f31cf8df-44f2-4fef-bc20-09a173032bb2"]]
     */
    val datasets: List<DatasetId>
}

/**
 * @d2 inherit
 */
@Serializable
data class CatalogueLinkedDatasetsEventDTOBase(
    override val id: CatalogueId,
    override val datasets: List<DatasetId>
): CatalogueLinkedDatasetsEventDTO
