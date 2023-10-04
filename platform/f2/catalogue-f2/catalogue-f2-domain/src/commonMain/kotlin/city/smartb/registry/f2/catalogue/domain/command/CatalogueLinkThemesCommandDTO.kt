package city.smartb.registry.f2.catalogue.domain.command

import city.smartb.registry.s2.catalogue.domain.automate.CatalogueId
import f2.dsl.fnc.F2Function
import f2.dsl.cqrs.Event
import kotlin.js.JsExport
import kotlin.js.JsName
import kotlinx.serialization.Serializable


typealias CatalogueLinkThemesFunction = F2Function<
        CatalogueLinkThemesCommandDTOBase,
        CatalogueLinkedThemesEventDTOBase
        >

@JsExport
@JsName("CatalogueLinkThemesCommandDTO")
interface CatalogueLinkThemesCommandDTO {
    val id: CatalogueId
    val themes: List<ThemeId>
}


@Serializable
data class CatalogueLinkThemesCommandDTOBase(
    override val id: CatalogueId,
    override val themes: List<ThemeId>
): CatalogueLinkThemesCommandDTO


@JsExport
@JsName("CatalogueLinkThemesEventDTO")
interface CatalogueLinkedThemesEventDTO: Event {
    val id: CatalogueId

    val themes: List<ThemeId>
}

@Serializable
data class CatalogueLinkedThemesEventDTOBase(
    override val id: CatalogueId,
    override val themes: List<ThemeId>
): CatalogueLinkedThemesEventDTO