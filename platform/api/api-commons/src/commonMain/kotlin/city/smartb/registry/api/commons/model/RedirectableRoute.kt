package city.smartb.registry.api.commons.model

import kotlin.js.JsExport
import kotlin.js.JsName

enum class RedirectableRoute(val id: String) {
    QUOTATION_LIST(RedirectableRoutes.quotations()),
    PROJECT_LIST(RedirectableRoutes.projects()),
}

/**
 * Mapping to a specific router of the frontend
 * /!\ Do not remove or update the value of any key. This should stay retro-compatible to avoid breaking any previously generated link /!\
 */
@JsExport
@JsName("RedirectableRoutes")
@Suppress("FunctionOnlyReturningConstant")
object RedirectableRoutes {
    fun quotations() = "quotations"
    fun projects() = "projects"
}
