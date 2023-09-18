package city.smartb.registry.f2.pool.domain

interface AssetPoolCommandApi {

    /**
     * Issue assets in an Asset Pool.
     */
    fun assetIssue(): city.smartb.registry.f2.pool.domain.command.AssetIssueFunction

    /**
     * Transfer assets from a sender to a receiver.
     */
    fun assetTransfer(): city.smartb.registry.f2.pool.domain.command.AssetTransferFunction

    /**
     * Offset assets from an asset pool.
     */
    fun assetOffset(): city.smartb.registry.f2.pool.domain.command.AssetOffsetFunction

    /**
     * Retire assets from an asset pool.
     */
    fun assetRetire(): city.smartb.registry.f2.pool.domain.command.AssetRetireFunction


    /**
     * Create an asset pool.
     */
    fun assetPoolCreate(): city.smartb.registry.f2.pool.domain.command.AssetPoolCreateFunction

    /**
     * Put an asset pool on hold.
     */
    fun assetPoolHold(): city.smartb.registry.f2.pool.domain.command.AssetPoolHoldFunction

    /**
     * Resume an asset pool.
     */
    fun assetPoolResume(): city.smartb.registry.f2.pool.domain.command.AssetPoolResumeFunction

    /**
     * Close an asset pool.
     */
    fun assetPoolClose(): city.smartb.registry.f2.pool.domain.command.AssetPoolCloseFunction
}
