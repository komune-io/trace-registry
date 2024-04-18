package io.komune.registry.f2.catalogue.domain

import CatalogueCommandApi
import io.komune.registry.f2.catalogue.domain.CatalogueQueryApi

/**
 * @d2 api
 * @parent [D2CatalogueF2Page]
 */
interface CatalogueApi: CatalogueCommandApi, CatalogueQueryApi
