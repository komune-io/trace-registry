import io.komune.registry.f2.catalogue.domain.command.CatalogueCreateFunction
import io.komune.registry.f2.catalogue.domain.command.CatalogueDeleteFunction
import io.komune.registry.f2.catalogue.domain.command.CatalogueLinkCataloguesFunction
import io.komune.registry.f2.catalogue.domain.command.CatalogueLinkDatasetsFunction
import io.komune.registry.f2.catalogue.domain.command.CatalogueLinkThemesFunction
import io.komune.registry.f2.catalogue.domain.command.CatalogueUnlinkCataloguesFunction
import io.komune.registry.f2.catalogue.domain.command.CatalogueUpdateFunction

interface CatalogueCommandApi {
    /** Create a catalogue */
    fun catalogueCreate(): CatalogueCreateFunction
    fun catalogueUpdate(): CatalogueUpdateFunction
    fun catalogueLinkCatalogues(): CatalogueLinkCataloguesFunction
    fun catalogueUnlinkCatalogues(): CatalogueUnlinkCataloguesFunction
    fun catalogueLinkDatasets(): CatalogueLinkDatasetsFunction
    fun catalogueLinkThemes(): CatalogueLinkThemesFunction
    fun catalogueDelete(): CatalogueDeleteFunction
}
