package io.komune.registry.f2.catalogue.domain

import io.komune.registry.f2.catalogue.domain.query.CatalogueGetByIdentifierFunction
import io.komune.registry.f2.catalogue.domain.query.CatalogueGetFunction
import io.komune.registry.f2.catalogue.domain.query.CatalogueListAllowedTypesFunction
import io.komune.registry.f2.catalogue.domain.query.CatalogueListAvailableOwnersFunction
import io.komune.registry.f2.catalogue.domain.query.CatalogueListAvailableParentsFunction
import io.komune.registry.f2.catalogue.domain.query.CatalogueListAvailableThemesFunction
import io.komune.registry.f2.catalogue.domain.query.CataloguePageFunction
import io.komune.registry.f2.catalogue.domain.query.CatalogueRefGetTreeFunction
import io.komune.registry.f2.catalogue.domain.query.CatalogueRefListFunction
import io.komune.registry.f2.catalogue.domain.query.CatalogueRefSearchFunction
import io.komune.registry.f2.catalogue.domain.query.CatalogueSearchFunction

interface CatalogueQueryApi {
    fun cataloguePage(): CataloguePageFunction
    fun catalogueSearch(): CatalogueSearchFunction
    fun catalogueGet(): CatalogueGetFunction
    fun catalogueGetByIdentifier(): CatalogueGetByIdentifierFunction

    fun catalogueListAvailableParents(): CatalogueListAvailableParentsFunction
    fun catalogueListAvailableThemes(): CatalogueListAvailableThemesFunction
    fun catalogueListAvailableOwners(): CatalogueListAvailableOwnersFunction
    fun catalogueListAllowedTypes(): CatalogueListAllowedTypesFunction

    fun catalogueRefList(): CatalogueRefListFunction
    fun catalogueRefGetTree(): CatalogueRefGetTreeFunction
    fun catalogueRefSearch(): CatalogueRefSearchFunction
}
