package io.komune.registry.f2.catalogue.domain

import io.komune.registry.f2.catalogue.domain.query.CatalogueGetByIdentifierFunction
import io.komune.registry.f2.catalogue.domain.query.CatalogueGetFunction
import io.komune.registry.f2.catalogue.domain.query.CatalogueListAvailableParentsFunction
import io.komune.registry.f2.catalogue.domain.query.CataloguePageFunction
import io.komune.registry.f2.catalogue.domain.query.CatalogueRefGetTreeFunction
import io.komune.registry.f2.catalogue.domain.query.CatalogueRefListFunction

interface CatalogueQueryApi {
    /** Get a page of catalogue */
    fun cataloguePage(): CataloguePageFunction
    fun catalogueGet(): CatalogueGetFunction
    fun catalogueGetByIdentifier(): CatalogueGetByIdentifierFunction
    fun catalogueRefList(): CatalogueRefListFunction
    fun catalogueRefGetTree(): CatalogueRefGetTreeFunction
    fun catalogueListAvailableParents(): CatalogueListAvailableParentsFunction
}
