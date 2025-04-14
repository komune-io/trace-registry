package io.komune.registry.s2.catalogue.draft.api

import io.komune.im.commons.auth.AuthenticationProvider
import io.komune.registry.s2.catalogue.draft.api.entity.CatalogueDraftAutomateExecutor
import io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftCreateCommand
import io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftCreatedEvent
import io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftDeleteCommand
import io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftDeletedEvent
import io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftRejectCommand
import io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftRejectedEvent
import io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftRequestUpdateCommand
import io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftRequestedUpdateEvent
import io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftSubmitCommand
import io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftSubmittedEvent
import io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftUpdateLinksCommand
import io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftUpdateTitleCommand
import io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftUpdatedLinksEvent
import io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftUpdatedTitleEvent
import io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftValidateCommand
import io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftValidatedEvent
import org.springframework.stereotype.Service
import java.util.UUID

@Service
class CatalogueDraftAggregateService(
    private val automate: CatalogueDraftAutomateExecutor,
) {
    suspend fun create(command: CatalogueDraftCreateCommand) = automate.init(command) {
        CatalogueDraftCreatedEvent(
            id = UUID.randomUUID().toString(),
            date = System.currentTimeMillis(),
            catalogueId = command.catalogueId,
            original = command.original,
            language = command.language,
            baseVersion = command.baseVersion,
            datasetIdMap = command.datasetIdMap,
            creatorId = AuthenticationProvider.getAuthedUser()!!.id
        )
    }

    suspend fun updateLinks(command: CatalogueDraftUpdateLinksCommand) = automate.transition(command) {
        CatalogueDraftUpdatedLinksEvent(
            id = command.id,
            date = System.currentTimeMillis(),
            addedParentIds = command.addParentIds.toSet(),
            removedParentIds = command.removeParentIds.toSet(),
            addedExternalReferencesToDatasets = command.addExternalReferencesToDatasets.mapValues { it.value.toSet() },
            removedExternalReferencesToDatasets = command.removeExternalReferencesToDatasets.mapValues { it.value.toSet() },
        )
    }

    suspend fun submit(command: CatalogueDraftSubmitCommand) = automate.transition(command) {
        CatalogueDraftSubmittedEvent(
            id = command.id,
            date = System.currentTimeMillis(),
            versionNotes = command.versionNotes,
        )
    }

    suspend fun updateTitle(command: CatalogueDraftUpdateTitleCommand) = automate.transition(command) {
        CatalogueDraftUpdatedTitleEvent(
            id = command.id,
            date = System.currentTimeMillis(),
            title = command.title,
        )
    }

    suspend fun requestUpdate(command: CatalogueDraftRequestUpdateCommand) = automate.transition(command) {
        CatalogueDraftRequestedUpdateEvent(
            id = command.id,
            date = System.currentTimeMillis(),
        )
    }

    suspend fun reject(command: CatalogueDraftRejectCommand) = automate.transition(command) {
        CatalogueDraftRejectedEvent(
            id = command.id,
            date = System.currentTimeMillis(),
        )
    }

    suspend fun validate(command: CatalogueDraftValidateCommand) = automate.transition(command) {
        CatalogueDraftValidatedEvent(
            id = command.id,
            date = System.currentTimeMillis(),
        )
    }

    suspend fun delete(command: CatalogueDraftDeleteCommand) = automate.transition(command) {
        CatalogueDraftDeletedEvent(
            id = command.id,
            date = System.currentTimeMillis(),
        )
    }
}
