package city.smartb.registry.f2.asset.pool.domain

import city.smartb.registry.f2.asset.pool.domain.command.AssetIssueFunction
import city.smartb.registry.f2.asset.pool.domain.command.AssetOffsetFunction
import city.smartb.registry.f2.asset.pool.domain.command.AssetPoolCloseFunction
import city.smartb.registry.f2.asset.pool.domain.command.AssetPoolCreateFunction
import city.smartb.registry.f2.asset.pool.domain.command.AssetPoolHoldFunction
import city.smartb.registry.f2.asset.pool.domain.command.AssetPoolResumeFunction
import city.smartb.registry.f2.asset.pool.domain.command.AssetRetireFunction
import city.smartb.registry.f2.asset.pool.domain.command.AssetTransferFunction

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
