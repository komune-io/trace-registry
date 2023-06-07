package city.smartb.registry.program.f2.asset.domain

import city.smartb.registry.program.f2.asset.domain.query.AssetStatsGetFunction
import city.smartb.registry.program.f2.asset.domain.query.AssetTransactionGetFunction
import city.smartb.registry.program.f2.asset.domain.query.AssetTransactionPageFunction

interface AssetQueryApi {

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
