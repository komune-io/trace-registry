package city.smartb.registry.f2.asset.pool.domain.utils

import city.smartb.registry.s2.asset.domain.automate.AssetPoolState
import kotlin.js.JsExport

@JsExport
object AssetPoolStatusValues {
    fun active() = AssetPoolState.ACTIVE.name
    fun onHold() = AssetPoolState.ON_HOLD.name
    fun closed() = AssetPoolState.CLOSED.name
}
