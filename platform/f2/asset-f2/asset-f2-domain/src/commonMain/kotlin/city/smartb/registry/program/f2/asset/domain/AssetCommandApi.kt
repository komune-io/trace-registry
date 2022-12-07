package city.smartb.registry.program.f2.asset.domain

import city.smartb.registry.program.f2.asset.domain.command.AssetCreateFunction
import city.smartb.registry.program.f2.asset.domain.command.AssetUpdateFunction

interface AssetCommandApi {
    /**
     * Create Asset
     */
    fun assetCreate(): AssetCreateFunction

    /**
     * Update Asset
     */
    fun assetUpdate(): AssetUpdateFunction
//    fun assetDelete(): AssetDeleteFunction
}
