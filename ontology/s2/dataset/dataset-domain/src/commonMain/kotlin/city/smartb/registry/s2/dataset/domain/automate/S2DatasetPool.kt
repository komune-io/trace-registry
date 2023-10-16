package city.smartb.registry.s2.dataset.domain.automate

import city.smartb.registry.s2.dataset.domain.command.DatasetLinkDatasetsCommand
import city.smartb.registry.s2.dataset.domain.command.DatasetLinkThemesCommand
import city.smartb.registry.s2.dataset.domain.command.DatasetLinkedDatasetsEvent
import city.smartb.registry.s2.dataset.domain.command.DatasetLinkedThemesEvent
import city.smartb.registry.s2.dataset.domain.command.DatasetCreateCommand
import city.smartb.registry.s2.dataset.domain.command.DatasetCreatedEvent
import city.smartb.registry.s2.dataset.domain.command.DatasetDeleteCommand
import city.smartb.registry.s2.dataset.domain.command.DatasetDeletedEvent
import city.smartb.registry.s2.dataset.domain.command.DatasetSetImageCommand
import city.smartb.registry.s2.dataset.domain.command.DatasetSetImageEvent
import city.smartb.registry.s2.dataset.domain.command.DatasetUpdateCommand
import city.smartb.registry.s2.dataset.domain.command.DatasetUpdatedEvent
import kotlinx.serialization.Serializable
import s2.dsl.automate.S2Role
import s2.dsl.automate.S2State
import s2.dsl.automate.builder.s2Sourcing

val s2Dataset = s2Sourcing {
    // TODO Change to real name
    name = "Dataset-0.0.1"
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
}

/**
 * @d2 hidden
 * @visual json "2ac68753-eb5e-4148-8dc2-40b741a350d4"
 */
typealias DatasetId = String
/**
 * @d2 hidden
 * @visual json "2ac68753-eb5e-4148-8dc2-40b741a350d4"
 */
typealias DatasetIdentifier = String

/**
 * @d2 automate
 * @visual automate platform/api/api-init/build/s2-documenter/Catalog.json
 * @order 1
 * @title States
 */
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
