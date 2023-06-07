package city.smartb.registry.program.f2.pool.domain

import city.smartb.registry.program.f2.pool.domain.query.AssetPoolGetFunction

interface AssetPoolQueryApi {
    /**
     * Get an asset pool by id.
     */
    fun assetPoolGet(): AssetPoolGetFunction
}
