import city.smartb.registry.f2.catalogue.domain.command.CatalogueCreateFunction

interface CatalogueCommandApi {
    /** Create a catalogue */
    fun catalogueCreate(): CatalogueCreateFunction
}
