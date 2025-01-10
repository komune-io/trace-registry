package io.komune.registry.f2.asset.order.domain

import io.komune.registry.f2.asset.order.domain.command.AssetOrderCancelFunction
import io.komune.registry.f2.asset.order.domain.command.AssetOrderCompleteFunction
import io.komune.registry.f2.asset.order.domain.command.AssetOrderDeleteFunction
import io.komune.registry.f2.asset.order.domain.command.AssetOrderPlaceFunction
import io.komune.registry.f2.asset.order.domain.command.AssetOrderSubmitFunction
import io.komune.registry.f2.asset.order.domain.command.AssetOrderUpdateFunction
import io.komune.registry.f2.asset.order.domain.query.AssetOrderGetFunction
import io.komune.registry.f2.asset.order.domain.query.AssetOrderPageFunction

interface AssetOrderCommandApi {

    /**
     * Get an asset order.
     */
    fun assetOrderGet(): AssetOrderGetFunction
    /**
     * get a Page of asset orders.
     */
    fun assetOrderPage(): AssetOrderPageFunction
    /**
     * Place a transaction order.
     */
    fun assetOrderPlace(): AssetOrderPlaceFunction
    /**
     * Submit a draft transaction order.
     */
    fun assetOrderSubmit(): AssetOrderSubmitFunction

    /**
     * Update a transaction order.
     */
    fun assetOrderUpdate(): AssetOrderUpdateFunction

    /**
     * Cancel a transaction order.
     */
    fun assetOrderCancel(): AssetOrderCancelFunction

    /**
     * Validate a transaction order.
     */
    fun assetOrderComplete(): AssetOrderCompleteFunction

    /**
     * Delete a transaction order.
     */
    fun assetOrderDelete(): AssetOrderDeleteFunction
}
