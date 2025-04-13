package io.komune.registry.s2.catalogue.draft.domain

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
import kotlinx.serialization.Serializable
import s2.dsl.automate.S2Role
import s2.dsl.automate.S2State
import s2.dsl.automate.builder.s2Sourcing
import kotlin.js.JsExport

val s2CatalogueDraft = s2Sourcing {
    name = "CatalogueDraft"
    init<CatalogueDraftCreateCommand, CatalogueDraftCreatedEvent> {
        to = CatalogueDraftState.DRAFT
        role = CatalogueDraftRole.Issuer
    }
    selfTransaction<CatalogueDraftUpdateTitleCommand, CatalogueDraftUpdatedTitleEvent> {
        states += CatalogueDraftState.DRAFT
        states += CatalogueDraftState.SUBMITTED
        states += CatalogueDraftState.UPDATE_REQUESTED
        states += CatalogueDraftState.REJECTED
        role = CatalogueDraftRole.Issuer
    }
    selfTransaction<CatalogueDraftUpdateLinksCommand, CatalogueDraftUpdatedLinksEvent> {
        states += CatalogueDraftState.DRAFT
        states += CatalogueDraftState.SUBMITTED
        states += CatalogueDraftState.UPDATE_REQUESTED
        states += CatalogueDraftState.REJECTED
        role = CatalogueDraftRole.Issuer
    }
    transaction<CatalogueDraftSubmitCommand, CatalogueDraftSubmittedEvent> {
        froms += CatalogueDraftState.DRAFT
        froms += CatalogueDraftState.REJECTED
        froms += CatalogueDraftState.UPDATE_REQUESTED
        to = CatalogueDraftState.SUBMITTED
        role = CatalogueDraftRole.Issuer
    }
    transaction<CatalogueDraftRequestUpdateCommand, CatalogueDraftRequestedUpdateEvent> {
        froms += CatalogueDraftState.SUBMITTED
        froms += CatalogueDraftState.REJECTED
        to = CatalogueDraftState.UPDATE_REQUESTED
        role = CatalogueDraftRole.Issuer
    }
    transaction<CatalogueDraftRejectCommand, CatalogueDraftRejectedEvent> {
        froms += CatalogueDraftState.DRAFT
        froms += CatalogueDraftState.SUBMITTED
        froms += CatalogueDraftState.UPDATE_REQUESTED
        to = CatalogueDraftState.REJECTED
        role = CatalogueDraftRole.Issuer
    }
    transaction<CatalogueDraftValidateCommand, CatalogueDraftValidatedEvent> {
        froms += CatalogueDraftState.DRAFT
        froms += CatalogueDraftState.SUBMITTED
        froms += CatalogueDraftState.UPDATE_REQUESTED
        froms += CatalogueDraftState.REJECTED
        to = CatalogueDraftState.VALIDATED
        role = CatalogueDraftRole.Issuer
    }
    selfTransaction<CatalogueDraftDeleteCommand, CatalogueDraftDeletedEvent> {
        states += CatalogueDraftState.entries.toList()
        role = CatalogueDraftRole.Issuer
    }
}

/**
 * @d2 automate
 * @visual automate platform/api/api-init/build/s2-documenter/CatalogueDraft.json
 * @order 1
 * @title Catalogue Draft States
 * @parent [io.komune.registry.f2.catalogue.draft.domain.D2CatalogueDraftF2Page]
 */
@Serializable
@JsExport
enum class CatalogueDraftState(override val position: Int): S2State {
    DRAFT(0),
    SUBMITTED(1),
    UPDATE_REQUESTED(2),
    VALIDATED(3),
    REJECTED(4),
    DELETED(5)
}

enum class CatalogueDraftRole(val value: String): S2Role {
    Issuer("Issuer");
    override fun toString() = value
}
