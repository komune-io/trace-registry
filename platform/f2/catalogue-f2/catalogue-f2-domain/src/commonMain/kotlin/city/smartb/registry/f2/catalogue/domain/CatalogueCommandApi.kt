import city.smartb.registry.f2.catalogue.domain.command.CatalogueCreateFunction
import city.smartb.registry.f2.catalogue.domain.command.CatalogueLinkCataloguesFunction

interface CatalogueCommandApi {
    /** Create a catalogue */
    fun catalogueCreate(): CatalogueCreateFunction
    fun catalogueLinkCatalogues(): CatalogueLinkCataloguesFunction
}
