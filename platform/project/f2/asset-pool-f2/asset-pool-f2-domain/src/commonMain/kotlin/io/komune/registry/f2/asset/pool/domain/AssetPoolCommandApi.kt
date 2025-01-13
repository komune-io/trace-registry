package io.komune.registry.f2.asset.pool.domain

import io.komune.registry.f2.asset.pool.domain.command.AssetIssueFunction
import io.komune.registry.f2.asset.pool.domain.command.AssetOffsetFunction
import io.komune.registry.f2.asset.pool.domain.command.AssetPoolCloseFunction
import io.komune.registry.f2.asset.pool.domain.command.AssetPoolCreateFunction
import io.komune.registry.f2.asset.pool.domain.command.AssetPoolHoldFunction
import io.komune.registry.f2.asset.pool.domain.command.AssetPoolResumeFunction
import io.komune.registry.f2.asset.pool.domain.command.AssetRetireFunction
import io.komune.registry.f2.asset.pool.domain.command.AssetTransferFunction

interface AssetPoolCommandApi {

    /**
     * Issue assets in an Asset Pool.
     */
    fun assetIssue(): AssetIssueFunction

    /**
     * Transfer assets from a sender to a receiver.
     */
    fun assetTransfer(): AssetTransferFunction

    /**
     * Offset assets from an asset pool.
     */
    fun assetOffset(): AssetOffsetFunction

    /**
     * Retire assets from an asset pool.
     */
    fun assetRetire(): AssetRetireFunction

    /**
     * Create an asset pool.
     */
    fun assetPoolCreate(): AssetPoolCreateFunction

    /**
     * Put an asset pool on hold.
     */
    fun assetPoolHold(): AssetPoolHoldFunction

    /**
     * Resume an asset pool.
     */
    fun assetPoolResume(): AssetPoolResumeFunction

    /**
     * Close an asset pool.
     */
    fun assetPoolClose(): AssetPoolCloseFunction
}
