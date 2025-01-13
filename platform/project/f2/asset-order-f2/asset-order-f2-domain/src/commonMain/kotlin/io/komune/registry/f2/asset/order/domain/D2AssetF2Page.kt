package io.komune.registry.f2.asset.order.domain

/**
 * Voluntary Emission Reductions (VER) asset pool is a collection of carbon offset credits generated through voluntary projects
 * aimed at reducing greenhouse gas emissions. Managed by third-party organizations, these credits can be traded or retired by businesses,
 * governments, or individuals to offset their carbon footprint and showcase their commitment to sustainability.
 * @d2 page
 * @title API/Asset
 * @child [io.komune.registry.s2.asset.domain.automate.AssetPoolState]
 * @child [io.komune.registry.s2.asset.domain.automate.AssetTransactionState]
 * @child [io.komune.registry.s2.order.domain.OrderState]
 */
interface D2AssetF2Page

/**
 * @d2 api
 * @parent [io.komune.registry.f2.asset.order.domain.D2AssetF2Page]
 */
interface D2AssetOrderAPi: AssetOrderApi
