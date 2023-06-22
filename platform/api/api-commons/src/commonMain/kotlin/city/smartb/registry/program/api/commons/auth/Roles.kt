package city.smartb.registry.program.api.commons.auth

import s2.dsl.automate.S2Role
import kotlin.js.JsExport
import kotlin.js.JsName

@JsExport
@JsName("Roles")
object Roles {
    const val ORCHESTRATOR = "tr_orchestrator"
    const val PROJECT_MANAGER = "tr_project_manager"
    const val STAKEHOLDER = "tr_stakeholder"
}

enum class Role(val value: String): S2Role {
    ORCHESTRATOR(Roles.ORCHESTRATOR),
    PROJECT_MANAGER(Roles.PROJECT_MANAGER),
    STAKEHOLDER(Roles.STAKEHOLDER);

    override fun toString() = value
}
