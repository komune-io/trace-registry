package city.smartb.registry.s2.catalogue.domain.automate

import city.smartb.registry.s2.catalogue.domain.command.CatalogueLinkCataloguesCommand
import city.smartb.registry.s2.catalogue.domain.command.CatalogueLinkThemesCommand
import city.smartb.registry.s2.catalogue.domain.command.CatalogueLinkedCataloguesEvent
import city.smartb.registry.s2.catalogue.domain.command.CatalogueLinkedThemesEvent
import city.smartb.registry.s2.catalogue.domain.command.CatalogueCreateCommand
import city.smartb.registry.s2.catalogue.domain.command.CatalogueCreatedEvent
import kotlinx.serialization.Serializable
import s2.dsl.automate.S2Role
import s2.dsl.automate.S2State
import s2.dsl.automate.builder.s2Sourcing

val s2Catalogue = s2Sourcing {
    name = "Catalogue"
    init<CatalogueCreateCommand, CatalogueCreatedEvent> {
        to = CatalogueState.ACTIVE
        role = CatalogueRole.Issuer
    }
    selfTransaction<CatalogueLinkCataloguesCommand, CatalogueLinkedCataloguesEvent> {
        states += CatalogueState.ACTIVE
        role = CatalogueRole.Issuer
    }
    transaction<CatalogueLinkThemesCommand, CatalogueLinkedThemesEvent> {
        to = CatalogueState.ACTIVE
        role = CatalogueRole.Issuer
    }
}

/**
 * @d2 hidden
 * @visual json "2ac68753-eb5e-4148-8dc2-40b741a350d4"
 */
typealias CatalogueId = String
/**
 * @d2 hidden
 * @visual json "2ac68753-eb5e-4148-8dc2-40b741a350d4"
 */
typealias CatalogueIdentifier = String

/**
 * @d2 automate
 * @visual automate platform/api/api-init/build/s2-documenter/Catalog.json
 * @order 1
 * @title States
 */
@Serializable
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
