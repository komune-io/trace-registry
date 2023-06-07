package city.smartb.registry.program.f2.pool.domain.utils

import city.smartb.registry.program.s2.asset.domain.automate.AssetPoolState
import kotlin.js.JsExport

@JsExport
object AssetPoolStatusValues {
    fun active() = AssetPoolState.ACTIVE.name
    fun onHold() = AssetPoolState.ON_HOLD.name
    fun closed() = AssetPoolState.CLOSED.name
}
