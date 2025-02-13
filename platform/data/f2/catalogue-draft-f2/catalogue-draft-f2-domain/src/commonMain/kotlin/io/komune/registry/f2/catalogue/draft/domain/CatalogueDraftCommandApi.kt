package io.komune.registry.f2.catalogue.draft.domain

import io.komune.registry.f2.catalogue.draft.domain.command.CatalogueDraftCreateFunction
import io.komune.registry.f2.catalogue.draft.domain.command.CatalogueDraftRejectFunction
import io.komune.registry.f2.catalogue.draft.domain.command.CatalogueDraftRequestUpdateFunction
import io.komune.registry.f2.catalogue.draft.domain.command.CatalogueDraftSubmitFunction
import io.komune.registry.f2.catalogue.draft.domain.command.CatalogueDraftValidateFunction

interface CatalogueDraftCommandApi {
    fun catalogueDraftCreate(): CatalogueDraftCreateFunction
    fun catalogueDraftSubmit(): CatalogueDraftSubmitFunction
    fun catalogueDraftRequestUpdate(): CatalogueDraftRequestUpdateFunction
    fun catalogueDraftReject(): CatalogueDraftRejectFunction
    fun catalogueDraftValidate(): CatalogueDraftValidateFunction
}
