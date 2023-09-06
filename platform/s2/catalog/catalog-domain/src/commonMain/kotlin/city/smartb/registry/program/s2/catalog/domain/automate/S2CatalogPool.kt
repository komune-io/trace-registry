package city.smartb.registry.program.s2.catalog.domain.automate

import city.smartb.registry.program.api.commons.model.S2SourcingEvent
import city.smartb.registry.program.s2.catalog.domain.command.catalog.CatalogCloseCommand
import city.smartb.registry.program.s2.catalog.domain.command.catalog.CatalogClosedEvent
import city.smartb.registry.program.s2.catalog.domain.command.CatalogCreateCommand
import city.smartb.registry.program.s2.catalog.domain.command.CatalogCreatedEvent
import city.smartb.registry.program.s2.catalog.domain.command.catalog.CatalogUpdateCommand
import city.smartb.registry.program.s2.catalog.domain.command.catalog.CatalogUpdatedEvent
import kotlinx.serialization.Serializable
import s2.dsl.automate.S2Command
import s2.dsl.automate.S2InitCommand
import s2.dsl.automate.S2Role
import s2.dsl.automate.S2State
import s2.dsl.automate.builder.s2Sourcing
import kotlin.js.JsExport
import kotlin.js.JsName

val s2Catalog = s2Sourcing {
    name = "Catalog"
    init<CatalogCreateCommand, CatalogCreatedEvent> {
        to = CatalogState.ACTIVE
        role = CatalogRole.Issuer
    }
    selfTransaction<CatalogUpdateCommand, CatalogUpdatedEvent> {
        states += listOf(CatalogState.ACTIVE, CatalogState.ACTIVE)
        role = CatalogRole.Issuer
    }
    transaction<CatalogCloseCommand, CatalogClosedEvent> {
        from = CatalogState.ACTIVE
        to = CatalogState.CLOSED
        role = CatalogRole.Issuer
    }
}

/**
 * @d2 hidden
 * @visual json "2ac68753-eb5e-4148-8dc2-40b741a350d4"
 */
typealias CatalogId = String

/**
 * @d2 automate
 * @visual automate platform/api/api-init/build/s2-documenter/Catalog.json
 * @order 1
 * @title States
 */
@Serializable
enum class CatalogState(override val position: Int): S2State {
    /**
     * The catalog is operational, and catalogs can be issued, transferred, or retired within it.
     * Trading is allowed, and catalogs are actively managed.
     */
    ACTIVE(0),

    /**
     * The catalog has been permanently closed. No further trading or management of catalogs is allowed. The catalog cannot be reopened.
     */
    CLOSED(1)
}

enum class CatalogRole(val value: String): S2Role {
    Issuer("Issuer");
    override fun toString() = value
}

@JsExport
@JsName("CatalogInitCommand")
interface CatalogInitCommand: S2InitCommand

@JsExport
@JsName("CatalogCommand")
interface CatalogCommand: S2Command<CatalogId>

@JsExport
@JsName("CatalogEvent")
interface CatalogEvent: S2SourcingEvent<CatalogId>
