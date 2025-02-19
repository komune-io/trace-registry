package io.komune.registry.s2.catalogue.draft.domain.command

import io.komune.registry.s2.commons.model.CatalogueDraftId
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

/**
 * @d2 command
 */
@JsExport
interface CatalogueDraftSubmitCommandDTO : CatalogueDraftCommand {
    /**
     * Id of the draft to submit.
     */
    override val id: CatalogueDraftId

    /**
     * Notes about the submitted version.
     * @example "Updated the description."
     */
    val versionNotes: String?
}

/**
 * @d2 inherit
 */
@Serializable
data class CatalogueDraftSubmitCommand(
    override val id: CatalogueDraftId,
    override val versionNotes: String?
) : CatalogueDraftSubmitCommandDTO

@Serializable
data class CatalogueDraftSubmittedEvent(
    override val id: CatalogueDraftId,
    override val date: Long,
    val versionNotes: String?
) : CatalogueDraftEvent
