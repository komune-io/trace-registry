package city.smartb.registry.program.s2.commons.auth

import s2.dsl.automate.S2Role
import kotlin.js.JsExport
import kotlin.js.JsName

@JsExport
@JsName("Roles")
object Roles {
    const val ORCHESTRATOR_ADMIN = "tr_orchestrator_admin"
    const val ORCHESTRATOR_USER = "tr_orchestrator_user"

    const val PROJECT_MANAGER_ADMIN = "tr_project_manager_admin"
    const val PROJECT_MANAGER_USER = "tr_project_manager_user"

    const val STAKEHOLDER_ADMIN = "tr_stakeholder_admin"
    const val STAKEHOLDER_USER = "tr_stakeholder_user"
}

enum class Role(val value: String): S2Role {
    ORCHESTRATOR_ADMIN(Roles.ORCHESTRATOR_ADMIN),
    ORCHESTRATOR_USER(Roles.ORCHESTRATOR_USER),
    PROJECT_MANAGER_ADMIN(Roles.PROJECT_MANAGER_ADMIN),
    PROJECT_MANAGER_USER(Roles.PROJECT_MANAGER_USER),
    STAKEHOLDER_ADMIN(Roles.STAKEHOLDER_ADMIN),
    STAKEHOLDER_USER(Roles.STAKEHOLDER_USER);

    override fun toString() = value
}
