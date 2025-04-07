import io.komune.registry.f2.catalogue.domain.command.CatalogueAddRelatedCataloguesFunction
import io.komune.registry.f2.catalogue.domain.command.CatalogueDeleteFunction
import io.komune.registry.f2.catalogue.domain.command.CatalogueLinkCataloguesFunction
import io.komune.registry.f2.catalogue.domain.command.CatalogueLinkThemesFunction
import io.komune.registry.f2.catalogue.domain.command.CatalogueReferenceDatasetsFunction
import io.komune.registry.f2.catalogue.domain.command.CatalogueRemoveRelatedCataloguesFunction
import io.komune.registry.f2.catalogue.domain.command.CatalogueUnlinkCataloguesFunction
import io.komune.registry.f2.catalogue.domain.command.CatalogueUnreferenceDatasetsFunction
import io.komune.registry.f2.catalogue.domain.command.CatalogueUpdateAccessRightsFunction

interface CatalogueCommandApi {
    fun catalogueUpdateAccessRights(): CatalogueUpdateAccessRightsFunction
    fun catalogueLinkCatalogues(): CatalogueLinkCataloguesFunction
    fun catalogueUnlinkCatalogues(): CatalogueUnlinkCataloguesFunction
    fun catalogueAddRelatedCatalogues(): CatalogueAddRelatedCataloguesFunction
    fun catalogueRemoveRelatedCatalogues(): CatalogueRemoveRelatedCataloguesFunction
    fun catalogueReferenceDatasets(): CatalogueReferenceDatasetsFunction
    fun catalogueUnreferenceDatasets(): CatalogueUnreferenceDatasetsFunction
    fun catalogueLinkThemes(): CatalogueLinkThemesFunction
    fun catalogueDelete(): CatalogueDeleteFunction
}
