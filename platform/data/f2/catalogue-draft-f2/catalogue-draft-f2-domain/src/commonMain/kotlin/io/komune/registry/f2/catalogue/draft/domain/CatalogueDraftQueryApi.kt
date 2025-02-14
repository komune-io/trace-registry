package io.komune.registry.f2.catalogue.draft.domain

import io.komune.registry.f2.catalogue.draft.domain.query.CatalogueDraftGetFunction
import io.komune.registry.f2.catalogue.draft.domain.query.CatalogueDraftPageFunction

interface CatalogueDraftQueryApi {
    fun catalogueDraftGet(): CatalogueDraftGetFunction
    fun catalogueDraftPage(): CatalogueDraftPageFunction
}
