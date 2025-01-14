@file:Suppress("FunctionOnlyReturningConstant")
package io.komune.registry.s2.commons.exception

object ExceptionCodes {
    // asset
    fun negativeTransaction() = 1000
    fun notEnoughAssets() = 1001
    fun granularityTooSmall() = 1002
    object Asset {
        const val NOT_ENOUGH_ASSETS = 1000
        const val NEGATIVE_TRANSACTION = 1001
        const val GRANULARITY_TOO_SMALL = 1002
    }
}
