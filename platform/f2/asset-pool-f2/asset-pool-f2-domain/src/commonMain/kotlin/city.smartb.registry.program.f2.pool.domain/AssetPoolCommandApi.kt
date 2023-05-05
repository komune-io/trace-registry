package city.smartb.registry.program.f2.pool.domain

import city.smartb.registry.program.f2.pool.domain.command.AssetPoolCloseFunction
import city.smartb.registry.program.f2.pool.domain.command.AssetPoolCreateFunction
import city.smartb.registry.program.f2.pool.domain.command.AssetPoolHoldFunction
import city.smartb.registry.program.f2.pool.domain.command.AssetPoolResumeFunction

interface AssetPoolCommandApi {
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
