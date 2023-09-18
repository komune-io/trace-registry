package city.smartb.registry.ver.test.auth

import city.smartb.im.f2.privilege.domain.role.model.Role
import io.cucumber.java8.En
import java.util.UUID
import s2.bdd.auth.AuthedUser
import s2.bdd.data.TestContextKey
import s2.bdd.data.parser.extractList

class DefineUserSteps: En, city.smartb.registry.ver.test.VerCucumberStepsDefinition() {

    init {
        DataTableType(::defineUserParams)

        Given("A user is defined:") { params: DefineUserParams ->
            step {
                defineUser(params)
            }
        }
    }

    private fun defineUser(params: DefineUserParams) = context.users.register(params.identifier) {
        val organization = context.organizations.safeGet(params.memberOf)
        AuthedUser(
            id = params.identifier,
            memberOf = organization.id,
            roles = (organization.roles.map(Role::identifier) + params.roles).toSet().toTypedArray()
        )
    }

    private fun defineUserParams(entry: Map<String, String>) = DefineUserParams(
        identifier = entry["identifier"] ?: UUID.randomUUID().toString(),
        memberOf = entry["memberOf"] ?: context.organizations.lastUsedKey,
        roles = entry.extractList("roles").orEmpty()
    )

    private data class DefineUserParams(
        val identifier: TestContextKey,
        val memberOf: TestContextKey,
        val roles: List<String>
    )
}
