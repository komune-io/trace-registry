package city.smartb.registry.f2.catalogue.domain

import city.smartb.registry.f2.catalogue.domain.query.CatalogueGetFunction
import city.smartb.registry.f2.catalogue.domain.query.CataloguePageFunction
import city.smartb.registry.f2.catalogue.domain.query.CatalogueRefListFunction

interface CatalogueQueryApi {
    /** Get a page of catalogue */
    fun cataloguePage(): CataloguePageFunction
    fun catalogueGet(): CatalogueGetFunction
    fun catalogueRefList(): CatalogueRefListFunction

}
