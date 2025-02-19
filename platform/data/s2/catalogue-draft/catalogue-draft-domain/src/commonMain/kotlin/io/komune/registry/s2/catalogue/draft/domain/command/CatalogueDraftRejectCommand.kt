package io.komune.registry.s2.catalogue.draft.domain.command

import io.komune.registry.s2.commons.model.CatalogueDraftId
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

/**
 * @d2 command
 */
@JsExport
interface CatalogueDraftRejectCommandDTO : CatalogueDraftCommand {
    /**
     * Id of the draft to reject.
     */
    override val id: CatalogueDraftId

    /**
     * Reason for rejecting the draft.
     * @example "Even my handless grandma could do better."
     */
    val reason: String
}

/**
 * @d2 inherit
 */
@Serializable
data class CatalogueDraftRejectCommand(
    override val id: CatalogueDraftId,
    override val reason: String
) : CatalogueDraftRejectCommandDTO

@Serializable
data class CatalogueDraftRejectedEvent(
    override val id: CatalogueDraftId,
    override val date: Long
) : CatalogueDraftEvent
