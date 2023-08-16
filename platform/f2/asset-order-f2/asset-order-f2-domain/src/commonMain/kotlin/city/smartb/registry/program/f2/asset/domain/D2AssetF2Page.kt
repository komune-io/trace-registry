package city.smartb.registry.program.f2.asset.domain

/**
 * Voluntary Emission Reductions (VER) asset pool is a collection of carbon offset credits generated through voluntary projects
 * aimed at reducing greenhouse gas emissions. Managed by third-party organizations, these credits can be traded or retired by businesses,
 * governments, or individuals to offset their carbon footprint and showcase their commitment to sustainability.
 * @d2 page
 * @title API/Asset
 * @child [city.smartb.registry.program.s2.asset.domain.automate.AssetPoolState]
 * @child [city.smartb.registry.program.s2.asset.domain.automate.AssetTransactionState]
 * @child [city.smartb.registry.program.s2.asset.domain.model.AssetTransactionType]
 * @child [city.smartb.registry.program.f2.pool.domain.model.AssetPoolDTO]
 * @child [city.smartb.registry.program.f2.pool.domain.command.AssetPoolCreateFunction]
 * @child [city.smartb.registry.program.f2.pool.domain.command.AssetPoolHoldFunction]
 * @child [city.smartb.registry.program.f2.pool.domain.command.AssetPoolResumeFunction]
 * @child [city.smartb.registry.program.f2.pool.domain.command.AssetPoolCloseFunction]
 * @child [city.smartb.registry.program.f2.pool.domain.query.AssetPoolGetFunction]
 */
interface D2AssetF2Page

/**
 * @d2 api
 * @parent [city.smartb.registry.program.f2.asset.domain.D2AssetF2Page]
 */
interface D2AssetOrderAPi: AssetOrderApi
