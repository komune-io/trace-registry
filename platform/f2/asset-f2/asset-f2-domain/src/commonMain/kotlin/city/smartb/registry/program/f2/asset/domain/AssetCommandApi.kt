package city.smartb.registry.program.f2.asset.domain

import city.smartb.registry.program.f2.asset.domain.command.AssetIssueFunction
import city.smartb.registry.program.f2.asset.domain.command.AssetOffsetFunction
import city.smartb.registry.program.f2.asset.domain.command.AssetOrderCancelFunction
import city.smartb.registry.program.f2.asset.domain.command.AssetOrderCompleteFunction
import city.smartb.registry.program.f2.asset.domain.command.AssetOrderDeleteFunction
import city.smartb.registry.program.f2.asset.domain.command.AssetOrderSubmitFunction
import city.smartb.registry.program.f2.asset.domain.command.AssetOrderUpdateFunction
import city.smartb.registry.program.f2.asset.domain.command.AssetRetireFunction
import city.smartb.registry.program.f2.asset.domain.command.AssetTransferFunction

interface AssetCommandApi {
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
     * Submit a draft transaction order.
     */
    fun assetOrderSubmit(): AssetOrderSubmitFunction

    /**
     * Update a transaction order.
     */
    fun assetOrderUpdate(): AssetOrderUpdateFunction

    /**
     * Cancel a transaction order.
     */
    fun assetOrderCancel(): AssetOrderCancelFunction

    /**
     * Validate a transaction order.
     */
    fun assetOrderComplete(): AssetOrderCompleteFunction

    /**
     * Delete a transaction order.
     */
    fun assetOrderDelete(): AssetOrderDeleteFunction
}
