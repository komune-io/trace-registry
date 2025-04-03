package io.komune.registry.s2.dataset.domain.automate

import io.komune.registry.s2.dataset.domain.command.DatasetAddDistributionCommand
import io.komune.registry.s2.dataset.domain.command.DatasetAddedDistributionEvent
import io.komune.registry.s2.dataset.domain.command.DatasetCreateCommand
import io.komune.registry.s2.dataset.domain.command.DatasetCreatedEvent
import io.komune.registry.s2.dataset.domain.command.DatasetDeleteCommand
import io.komune.registry.s2.dataset.domain.command.DatasetDeletedEvent
import io.komune.registry.s2.dataset.domain.command.DatasetLinkDatasetsCommand
import io.komune.registry.s2.dataset.domain.command.DatasetLinkThemesCommand
import io.komune.registry.s2.dataset.domain.command.DatasetLinkedDatasetsEvent
import io.komune.registry.s2.dataset.domain.command.DatasetLinkedThemesEvent
import io.komune.registry.s2.dataset.domain.command.DatasetRemoveDistributionCommand
import io.komune.registry.s2.dataset.domain.command.DatasetRemovedDistributionEvent
import io.komune.registry.s2.dataset.domain.command.DatasetSetImageCommand
import io.komune.registry.s2.dataset.domain.command.DatasetSetImageEvent
import io.komune.registry.s2.dataset.domain.command.DatasetUnlinkDatasetsCommand
import io.komune.registry.s2.dataset.domain.command.DatasetUnlinkedDatasetsEvent
import io.komune.registry.s2.dataset.domain.command.DatasetUpdateCommand
import io.komune.registry.s2.dataset.domain.command.DatasetUpdateDistributionAggregatorValuesCommand
import io.komune.registry.s2.dataset.domain.command.DatasetUpdateDistributionCommand
import io.komune.registry.s2.dataset.domain.command.DatasetUpdatedDistributionAggregatorValuesEvent
import io.komune.registry.s2.dataset.domain.command.DatasetUpdatedDistributionEvent
import io.komune.registry.s2.dataset.domain.command.DatasetUpdatedEvent
import kotlinx.serialization.Serializable
import s2.dsl.automate.S2Role
import s2.dsl.automate.S2State
import s2.dsl.automate.builder.s2Sourcing
import kotlin.js.JsExport

val s2Dataset = s2Sourcing {
    name = "Dataset"
    init<DatasetCreateCommand, DatasetCreatedEvent> {
        to = DatasetState.ACTIVE
        role = DatasetRole.Issuer
    }
    selfTransaction<DatasetSetImageCommand, DatasetSetImageEvent> {
        states += DatasetState.ACTIVE
        role = DatasetRole.Issuer
    }
    selfTransaction<DatasetLinkDatasetsCommand, DatasetLinkedDatasetsEvent> {
        states += DatasetState.ACTIVE
        role = DatasetRole.Issuer
    }
    selfTransaction<DatasetUnlinkDatasetsCommand, DatasetUnlinkedDatasetsEvent> {
        states += DatasetState.ACTIVE
        role = DatasetRole.Issuer
    }
    selfTransaction<DatasetLinkThemesCommand, DatasetLinkedThemesEvent> {
        states += DatasetState.ACTIVE
        role = DatasetRole.Issuer
    }
    selfTransaction<DatasetUpdateCommand, DatasetUpdatedEvent> {
        states += DatasetState.ACTIVE
        role = DatasetRole.Issuer
    }
    transaction<DatasetDeleteCommand, DatasetDeletedEvent> {
        from = DatasetState.ACTIVE
        to = DatasetState.DELETED
        role = DatasetRole.Issuer
    }

    selfTransaction<DatasetAddDistributionCommand, DatasetAddedDistributionEvent> {
        states += DatasetState.ACTIVE
        role = DatasetRole.Issuer
    }
    selfTransaction<DatasetUpdateDistributionCommand, DatasetUpdatedDistributionEvent> {
        states += DatasetState.ACTIVE
        role = DatasetRole.Issuer
    }
    selfTransaction<DatasetUpdateDistributionAggregatorValuesCommand, DatasetUpdatedDistributionAggregatorValuesEvent> {
        states += DatasetState.ACTIVE
        role = DatasetRole.Issuer
    }
    selfTransaction<DatasetRemoveDistributionCommand, DatasetRemovedDistributionEvent> {
        states += DatasetState.ACTIVE
        role = DatasetRole.Issuer
    }
}

/**
 * @d2 automate
 * @visual automate platform/api/api-init/build/s2-documenter/Dataset.json
 * @order 1
 * @title Dataset States
 * @parent [io.komune.registry.f2.dataset.domain.D2DatasetF2Page]
 */
@JsExport
@Serializable
enum class DatasetState(override val position: Int): S2State {
    /**
     * The dataset is operational, and datasets can be issued, transferred, or retired within it.
     * Trading is allowed, and datasets are actively managed.
     */
    ACTIVE(0),

    /**
     * The dataset has been permanently closed. No further trading or management of datasets is allowed. The catalog cannot be reopened.
     */
    DELETED(1)
}

enum class DatasetRole(val value: String): S2Role {
    Issuer("Issuer");
    override fun toString() = value
}
