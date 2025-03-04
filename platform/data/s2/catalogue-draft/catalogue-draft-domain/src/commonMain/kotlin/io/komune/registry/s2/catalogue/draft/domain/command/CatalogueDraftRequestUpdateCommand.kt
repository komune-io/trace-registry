package io.komune.registry.s2.catalogue.draft.domain.command

import io.komune.registry.s2.commons.model.CatalogueDraftId
import kotlin.js.JsExport
import kotlinx.serialization.Serializable

/**
 * @d2 command
 */
@JsExport
interface CatalogueDraftRequestUpdateCommandDTO : CatalogueDraftCommand {
    /**
     * Id of the draft to request an update to.
     */
    override val id: CatalogueDraftId
}

/**
 * @d2 inherit
 */
@Serializable
data class CatalogueDraftRequestUpdateCommand(
    override val id: CatalogueDraftId
) : CatalogueDraftRequestUpdateCommandDTO

@Serializable
data class CatalogueDraftRequestedUpdateEvent(
    override val id: CatalogueDraftId,
    override val date: Long
) : CatalogueDraftEvent
