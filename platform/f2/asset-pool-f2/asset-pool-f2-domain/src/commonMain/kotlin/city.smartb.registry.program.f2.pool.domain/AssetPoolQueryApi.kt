package city.smartb.registry.program.f2.pool.domain

import city.smartb.registry.program.f2.pool.domain.query.AssetPoolGetFunction
import city.smartb.registry.program.f2.pool.domain.query.AssetStatsGetFunction
import city.smartb.registry.program.f2.pool.domain.query.AssetTransactionGetFunction
import city.smartb.registry.program.f2.pool.domain.query.AssetTransactionPageFunction

interface AssetPoolQueryApi {
    /**
     * Get an asset pool by id.
     */
    fun assetPoolGet(): AssetPoolGetFunction


    /** Get a transaction by id */
    fun assetTransactionGet(): AssetTransactionGetFunction

    /**
     * Fetch a page of transactions.
     */
    fun assetTransactionPage(): AssetTransactionPageFunction

    /**
     * Fetch a page of transactions.
     */
    fun assetStatsGet(): AssetStatsGetFunction
}
