package city.smartb.registry.program.f2.asset.domain

import city.smartb.registry.program.f2.asset.domain.query.AssetGetFunction
import city.smartb.registry.program.f2.asset.domain.query.AssetPageFunction

interface AssetQueryApi {
    /**
     * Get a asset by Id
     */
    fun assetGet(): AssetGetFunction
    /**
     * Get a page of asset
     */
    fun assetPage(): AssetPageFunction
}
