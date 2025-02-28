package io.komune.registry.s2.commons.auth

import kotlin.js.JsExport
import kotlin.js.JsName

@JsExport
@JsName("Roles")
@Deprecated("Will be removed, use Permissions instead.")
object Roles {
    const val ORCHESTRATOR = "tr_orchestrator"
    const val ORCHESTRATOR_ADMIN = "tr_orchestrator_admin"
    const val ORCHESTRATOR_USER = "tr_orchestrator_user"

    const val PROJECT_MANAGER = "tr_project_manager"
    const val PROJECT_MANAGER_ADMIN = "tr_project_manager_admin"
    const val PROJECT_MANAGER_USER = "tr_project_manager_user"

    const val STAKEHOLDER = "tr_stakeholder"
    const val STAKEHOLDER_ADMIN = "tr_stakeholder_admin"
    const val STAKEHOLDER_USER = "tr_stakeholder_user"
}
