package city.smartb.registry.f2.catalogue.domain.command

import city.smartb.registry.s2.catalogue.domain.automate.CatalogueId
import city.smartb.registry.s2.catalogue.domain.command.CatalogueDeleteCommand
import f2.dsl.fnc.F2Function
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * Delete a catalogue
 * @d2 function
 * @parent
 */
typealias CatalogueDeleteFunction = F2Function<CatalogueDeleteCommand, CatalogueDeletedEventDTOBase>


@JsExport
@JsName("CatalogueDeleteCommandDTO")
interface CatalogueDeleteCommandDTO: city.smartb.registry.s2.catalogue.domain.command.CatalogueDeleteCommandDTO


@JsExport
@JsName("CatalogueDeletedEventDTO")
interface CatalogueDeletedEventDTO {
    val id: CatalogueId
}

data class CatalogueDeleteCommandDTOBase(
    override val id: CatalogueId
): CatalogueDeleteCommandDTO

data class CatalogueDeletedEventDTOBase(
    override val id: CatalogueId
): CatalogueDeletedEventDTO
