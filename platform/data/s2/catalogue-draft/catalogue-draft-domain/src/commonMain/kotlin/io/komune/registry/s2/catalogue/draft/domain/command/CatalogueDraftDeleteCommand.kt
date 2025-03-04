package io.komune.registry.s2.catalogue.draft.domain.command

import io.komune.registry.s2.commons.model.CatalogueDraftId
import kotlin.js.JsExport
import kotlinx.serialization.Serializable

/**
 * @d2 command
 */
@JsExport
interface CatalogueDraftDeleteCommandDTO : CatalogueDraftCommand {
    /**
     * Id of the draft to delete.
     */
    override val id: CatalogueDraftId
}

/**
 * @d2 inherit
 */
@Serializable
data class CatalogueDraftDeleteCommand(
    override val id: CatalogueDraftId
) : CatalogueDraftDeleteCommandDTO

@Serializable
data class CatalogueDraftDeletedEvent(
    override val id: CatalogueDraftId,
    override val date: Long
) : CatalogueDraftEvent
