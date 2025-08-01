package io.komune.registry.s2.catalogue.domain.automate

import io.komune.registry.s2.catalogue.domain.command.CatalogueAddRelatedCataloguesCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueAddTranslationsCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueAddedRelatedCataloguesEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueAddedTranslationsEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueCreateCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueCreatedEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueDeleteCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueDeletedEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueLinkCataloguesCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueLinkDatasetsCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueLinkMetadataDatasetCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueLinkThemesCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueLinkedCataloguesEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueLinkedDatasetsEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueLinkedMetadataDatasetEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueLinkedThemesEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueReferenceDatasetsCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueReferencedDatasetsEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueRemoveRelatedCataloguesCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueRemoveTranslationsCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueRemovedRelatedCataloguesEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueRemovedTranslationsEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueReplaceRelatedCataloguesCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueReplacedRelatedCataloguesEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueSetImageCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueSetImageEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueStartCertificationCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueStartedCertificationEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueUnlinkCataloguesCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueUnlinkDatasetsCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueUnlinkedCataloguesEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueUnlinkedDatasetsEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueUnreferenceDatasetsCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueUnreferencedDatasetsEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueUpdateAccessRightsCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueUpdateCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueUpdateVersionNotesCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueUpdatedAccessRightsEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueUpdatedEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueUpdatedVersionNotesEvent
import kotlinx.serialization.Serializable
import s2.dsl.automate.S2Role
import s2.dsl.automate.S2State
import s2.dsl.automate.builder.s2Sourcing
import kotlin.js.JsExport

val s2Catalogue = s2Sourcing {
    name = "Catalogue"
    init<CatalogueCreateCommand, CatalogueCreatedEvent> {
        to = CatalogueState.ACTIVE
        role = CatalogueRole.Issuer
    }
    selfTransaction<CatalogueSetImageCommand, CatalogueSetImageEvent> {
        states += CatalogueState.ACTIVE
        role = CatalogueRole.Issuer
    }
    selfTransaction<CatalogueAddTranslationsCommand, CatalogueAddedTranslationsEvent> {
        states += CatalogueState.ACTIVE
        role = CatalogueRole.Issuer
    }
    selfTransaction<CatalogueRemoveTranslationsCommand, CatalogueRemovedTranslationsEvent> {
        states += CatalogueState.ACTIVE
        role = CatalogueRole.Issuer
    }
    selfTransaction<CatalogueLinkCataloguesCommand, CatalogueLinkedCataloguesEvent> {
        states += CatalogueState.ACTIVE
        role = CatalogueRole.Issuer
    }
    selfTransaction<CatalogueUnlinkCataloguesCommand, CatalogueUnlinkedCataloguesEvent> {
        states += CatalogueState.ACTIVE
        role = CatalogueRole.Issuer
    }
    selfTransaction<CatalogueAddRelatedCataloguesCommand, CatalogueAddedRelatedCataloguesEvent> {
        states += CatalogueState.ACTIVE
        role = CatalogueRole.Issuer
    }
    selfTransaction<CatalogueReplaceRelatedCataloguesCommand, CatalogueReplacedRelatedCataloguesEvent> {
        states += CatalogueState.ACTIVE
        role = CatalogueRole.Issuer
    }
    selfTransaction<CatalogueRemoveRelatedCataloguesCommand, CatalogueRemovedRelatedCataloguesEvent> {
        states += CatalogueState.ACTIVE
        role = CatalogueRole.Issuer
    }
    selfTransaction<CatalogueLinkThemesCommand, CatalogueLinkedThemesEvent> {
        states += CatalogueState.ACTIVE
        role = CatalogueRole.Issuer
    }
    selfTransaction<CatalogueLinkDatasetsCommand, CatalogueLinkedDatasetsEvent> {
        states += CatalogueState.ACTIVE
        role = CatalogueRole.Issuer
    }
    selfTransaction<CatalogueLinkMetadataDatasetCommand, CatalogueLinkedMetadataDatasetEvent> {
        states += CatalogueState.ACTIVE
        role = CatalogueRole.Issuer
    }
    selfTransaction<CatalogueUnlinkDatasetsCommand, CatalogueUnlinkedDatasetsEvent> {
        states += CatalogueState.ACTIVE
        role = CatalogueRole.Issuer
    }
    selfTransaction<CatalogueReferenceDatasetsCommand, CatalogueReferencedDatasetsEvent> {
        states += CatalogueState.ACTIVE
        role = CatalogueRole.Issuer
    }
    selfTransaction<CatalogueUnreferenceDatasetsCommand, CatalogueUnreferencedDatasetsEvent> {
        states += CatalogueState.ACTIVE
        role = CatalogueRole.Issuer
    }
    selfTransaction<CatalogueUpdateCommand, CatalogueUpdatedEvent> {
        states += CatalogueState.ACTIVE
        role = CatalogueRole.Issuer
    }
    selfTransaction<CatalogueUpdateVersionNotesCommand, CatalogueUpdatedVersionNotesEvent> {
        states += CatalogueState.ACTIVE
        role = CatalogueRole.Issuer
    }
    selfTransaction<CatalogueUpdateAccessRightsCommand, CatalogueUpdatedAccessRightsEvent> {
        states += CatalogueState.ACTIVE
        role = CatalogueRole.Issuer
    }
    selfTransaction<CatalogueStartCertificationCommand, CatalogueStartedCertificationEvent> {
        states += CatalogueState.ACTIVE
        role = CatalogueRole.Issuer
    }
    transaction<CatalogueDeleteCommand, CatalogueDeletedEvent> {
        from = CatalogueState.ACTIVE
        to = CatalogueState.DELETED
        role = CatalogueRole.Issuer
    }
}

/**
 * @d2 automate
 * @visual automate platform/api/api-init/build/s2-documenter/Catalogue.json
 * @order 1
 * @title Catalogue States
 * @parent [io.komune.registry.f2.catalogue.domain.D2CatalogueF2Page]
 */
@Serializable
@JsExport
enum class CatalogueState(override val position: Int): S2State {
    /**
     * The catalogue is operational, and catalogues can be issued, transferred, or retired within it.
     * Trading is allowed, and catalogues are actively managed.
     */
    ACTIVE(0),

    /**
     * The catalogue has been permanently closed. No further trading or management of catalogues is allowed. The catalog cannot be reopened.
     */
    DELETED(1)
}

enum class CatalogueRole(val value: String): S2Role {
    Issuer("Issuer");
    override fun toString() = value
}
