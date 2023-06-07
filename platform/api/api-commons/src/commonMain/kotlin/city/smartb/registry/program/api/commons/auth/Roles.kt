package city.smartb.registry.program.api.commons.auth

import kotlin.js.JsExport
import kotlin.js.JsName

@JsExport
@JsName("Roles")
object Roles {
    const val ORCHESTRATOR = "tr_orchestrator"
    const val PROJECT_MANAGER = "tr_project_manager"
    const val STAKEHOLDER = "tr_stakeholder"
}
