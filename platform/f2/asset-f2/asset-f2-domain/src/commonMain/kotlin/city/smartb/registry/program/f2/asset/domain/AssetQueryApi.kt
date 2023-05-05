package city.smartb.registry.program.f2.asset.domain

import city.smartb.registry.program.f2.asset.domain.query.AssetTransactionPageFunction

interface AssetQueryApi {
    /**
     * Fetch a page of transactions.
     */
    fun assetTransactionPage(): AssetTransactionPageFunction
}
