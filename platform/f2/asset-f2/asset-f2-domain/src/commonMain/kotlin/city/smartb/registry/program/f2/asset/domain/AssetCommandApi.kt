package city.smartb.registry.program.f2.asset.domain

import city.smartb.registry.program.f2.asset.domain.command.AssetIssueFunction
import city.smartb.registry.program.f2.asset.domain.command.AssetOffsetFunction
import city.smartb.registry.program.f2.asset.domain.command.AssetTransferFunction
import city.smartb.registry.program.f2.asset.domain.command.AssetWithdrawFunction

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
     * Withdraw assets from an asset pool.
     */
    fun assetWithdraw(): AssetWithdrawFunction
}
