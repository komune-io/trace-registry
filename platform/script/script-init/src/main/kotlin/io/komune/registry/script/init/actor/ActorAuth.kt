package io.komune.registry.script.init.actor

import f2.client.domain.AuthRealm
import f2.client.domain.AuthRealmClientSecret

object ActorAuth {
    fun getActor(
        name: String,
        authRealm: AuthRealm
    ): Actor {
        return Actor(name, authRealm)
    }

}

open class Actor(
    val name: String,
    val authRealm: AuthRealm
)

enum class ActorType(
    val organizationRoles: List<String>,
    val userRoles: List<String>
) {
    OFFSETTER(
        organizationRoles = listOf(
            "tr_stakeholder"
        ),
        userRoles = listOf(
            "tr_stakeholder_admin"
        )
    ),
    ORCHESTRATOR(
        organizationRoles = listOf(
            "tr_orchestrator"
        ),
        userRoles = listOf(
            "tr_orchestrator_admin"
        )
    ),
    ISSUER(
        organizationRoles = listOf(
            "tr_stakeholder"
        ),
        userRoles = listOf(
            "tr_stakeholder_admin"
        )
    ),
    PROJECT_MANAGER(
        organizationRoles = listOf(
            "tr_project_manager"
        ),
        userRoles = listOf(
            "tr_project_manager_admin"
        )
    )
}

