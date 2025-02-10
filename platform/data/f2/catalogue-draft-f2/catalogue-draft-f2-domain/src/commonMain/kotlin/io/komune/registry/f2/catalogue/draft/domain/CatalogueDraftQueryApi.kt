package io.komune.registry.f2.catalogue.draft.domain

import io.komune.registry.f2.catalogue.draft.domain.query.CatalogueDraftGetFunction

interface CatalogueDraftQueryApi {
    fun catalogueDraftGet(): CatalogueDraftGetFunction
}
