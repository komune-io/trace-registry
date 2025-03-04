package io.komune.registry.s2.catalogue.draft.domain.command

import io.komune.registry.s2.commons.model.CatalogueDraftId
import kotlin.js.JsExport
import kotlinx.serialization.Serializable

/**
 * @d2 command
 */
@JsExport
interface CatalogueDraftValidateCommandDTO : CatalogueDraftCommand {
    /**
     * Id of the draft to validate.
     */
    override val id: CatalogueDraftId
}

/**
 * @d2 inherit
 */
@Serializable
data class CatalogueDraftValidateCommand(
    override val id: CatalogueDraftId
) : CatalogueDraftValidateCommandDTO

@Serializable
data class CatalogueDraftValidatedEvent(
    override val id: CatalogueDraftId,
    override val date: Long
) : CatalogueDraftEvent
