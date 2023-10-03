package city.smartb.registry.f2.catalogue.domain

import city.smartb.registry.f2.catalogue.domain.query.CataloguePageFunction

interface CatalogueQueryApi {
    /** Get a page of catalogue */
    fun cataloguePage(): CataloguePageFunction

}
