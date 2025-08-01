@file:Suppress("MatchingDeclarationName")
package cccev.dsl.model

import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
@Serializable
open class Code {
    override fun toString(): String {
        return this::class.simpleName ?: "Unknown"
    }
}
