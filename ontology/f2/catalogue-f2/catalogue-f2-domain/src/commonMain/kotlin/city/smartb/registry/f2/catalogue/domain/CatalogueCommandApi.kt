import city.smartb.registry.f2.catalogue.domain.command.CatalogueCreateFunction
import city.smartb.registry.f2.catalogue.domain.command.CatalogueDeleteFunction
import city.smartb.registry.f2.catalogue.domain.command.CatalogueLinkCataloguesFunction
import city.smartb.registry.f2.catalogue.domain.command.CatalogueLinkThemesFunction

interface CatalogueCommandApi {
    /** Create a catalogue */
    fun catalogueCreate(): CatalogueCreateFunction
    fun catalogueLinkCatalogues(): CatalogueLinkCataloguesFunction
    fun catalogueLinkThemes(): CatalogueLinkThemesFunction
    fun catalogueDelete(): CatalogueDeleteFunction
}
