package city.smartb.registry.f2.pool.domain

import city.smartb.registry.f2.pool.domain.query.AssetPoolPageFunction
import city.smartb.registry.f2.pool.domain.query.AssetTransactionGetFunction
import city.smartb.registry.f2.pool.domain.query.AssetTransactionPageFunction

interface AssetPoolQueryApi {
    /**
     * Get a page of asset pools.
     */
    fun assetPoolPage(): AssetPoolPageFunction
    /**
     * Get an asset pool by id.
     */
    fun assetPoolGet(): city.smartb.registry.f2.pool.domain.query.AssetPoolGetFunction


    /** Get a transaction by id */
    fun assetTransactionGet(): AssetTransactionGetFunction

    /**
     * Fetch a page of transactions.
     */
    fun assetTransactionPage(): AssetTransactionPageFunction

    /**
     * Fetch a page of transactions.
     */
    fun assetStatsGet(): city.smartb.registry.f2.pool.domain.query.AssetStatsGetFunction
}
