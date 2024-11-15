package io.komune.registry.s2.asset.domain.automate

import io.komune.registry.s2.asset.domain.command.pool.AssetPoolCloseCommand
import io.komune.registry.s2.asset.domain.command.pool.AssetPoolClosedEvent
import io.komune.registry.s2.asset.domain.command.pool.AssetPoolCreateCommand
import io.komune.registry.s2.asset.domain.command.pool.AssetPoolCreatedEvent
import io.komune.registry.s2.asset.domain.command.pool.AssetPoolEmitTransactionCommand
import io.komune.registry.s2.asset.domain.command.pool.AssetPoolEmittedTransactionEvent
import io.komune.registry.s2.asset.domain.command.pool.AssetPoolHeldEvent
import io.komune.registry.s2.asset.domain.command.pool.AssetPoolHoldCommand
import io.komune.registry.s2.asset.domain.command.pool.AssetPoolResumeCommand
import io.komune.registry.s2.asset.domain.command.pool.AssetPoolResumedEvent
import io.komune.registry.s2.asset.domain.command.pool.AssetPoolUpdateCommand
import io.komune.registry.s2.asset.domain.command.pool.AssetPoolUpdatedEvent
import io.komune.registry.s2.commons.model.S2SourcingEvent
import kotlin.js.JsExport
import kotlin.js.JsName
import kotlinx.serialization.Serializable
import s2.dsl.automate.S2Command
import s2.dsl.automate.S2InitCommand
import s2.dsl.automate.S2Role
import s2.dsl.automate.S2State
import s2.dsl.automate.builder.s2Sourcing

val s2AssetPool = s2Sourcing {
    name = "AssetPool"
    init<AssetPoolCreateCommand, AssetPoolCreatedEvent> {
        to = AssetPoolState.ACTIVE
        role = AssetPoolRole.Issuer
    }
    selfTransaction<AssetPoolUpdateCommand, AssetPoolUpdatedEvent> {
        states += listOf(AssetPoolState.ACTIVE, AssetPoolState.ON_HOLD)
        role = AssetPoolRole.Issuer
    }
    transaction<AssetPoolResumeCommand, AssetPoolResumedEvent> {
        from = AssetPoolState.ON_HOLD
        to = AssetPoolState.ACTIVE
        role = AssetPoolRole.Issuer
    }
    transaction<AssetPoolHoldCommand, AssetPoolHeldEvent> {
        from = AssetPoolState.ACTIVE
        to = AssetPoolState.ON_HOLD
        role = AssetPoolRole.Issuer
    }
    transaction<AssetPoolCloseCommand, AssetPoolClosedEvent> {
        from = AssetPoolState.ON_HOLD
        to = AssetPoolState.CLOSED
        role = AssetPoolRole.Issuer
    }
    selfTransaction<AssetPoolEmitTransactionCommand, AssetPoolEmittedTransactionEvent> {
        states += AssetPoolState.ACTIVE
        role = AssetPoolRole.Issuer
    }
}

/**
 * @d2 hidden
 * @visual json "2ac68753-eb5e-4148-8dc2-40b741a350d4"
 */
typealias AssetPoolId = String

/**
 * @d2 automate
 * @visual automate platform/s2/asset/asset-domain/build/s2-documenter/AssetPool.json
 * @order 1
 * @title States
 * @parent [io.komune.registry.s2.asset.domain.S2AssetTest]
 */
@Serializable
enum class AssetPoolState(override val position: Int): S2State {
    /**
     * The pool is operational, and assets can be issued, transferred, or retired within it.
     * Trading is allowed, and assets are actively managed.
     */
    ACTIVE(0),

    /**
     * The pool is temporarily suspended. No trading or management of assets can occur. The pool may be resumed or closed permanently.
     */
    ON_HOLD(1),

    /**
     * The pool has been permanently closed. No further trading or management of assets is allowed. The pool cannot be reopened.
     */
    CLOSED(2)
}

enum class AssetPoolRole(val value: String): S2Role {
    Issuer("Issuer");
    override fun toString() = value
}

@JsExport
@JsName("AssetPoolInitCommand")
interface AssetPoolInitCommand: S2InitCommand

@JsExport
@JsName("AssetPoolCommand")
interface AssetPoolCommand: S2Command<AssetPoolId>

@JsExport
@JsName("AssetPoolEvent")
interface AssetPoolEvent: S2SourcingEvent<AssetPoolId>
