package city.smartb.registry.program.bdd.steps.generics

import city.smartb.im.user.domain.features.query.UserGetQuery
import f2.dsl.fnc.invokeWith
import city.smartb.registry.program.bdd.CucumberStepsDefinition
import city.smartb.registry.program.bdd.data.TestContextKey
import city.smartb.registry.program.bdd.data.parser.safeExtract
import io.cucumber.java8.En
import org.springframework.beans.factory.annotation.Autowired

class AuthenticationSteps: En, CucumberStepsDefinition() {

    @Autowired
    private lateinit var userFeaturesImpl: UserFeaturesImpl

    init {
        DataTableType(::authenticationParams)

        Given("I am authenticated as:") { params: AuthenticationParams ->
            step {
                authenticate(params)
            }
        }

        Given("I am not authenticated") {
            step {
                context.authedUser = null
            }
        }
    }

    private suspend fun authenticate(params: AuthenticationParams) {
        val userId = context.userIds.safeGet(params.identifier)
        val user = UserGetQuery(userId).invokeWith(userFeaturesImpl.userGet()).item!!
        context.authedUser = AuthedUser(
            id = user.id,
            memberOf = user.memberOf?.id,
            roles = user.rolesComposites.effectiveRoles.toTypedArray()
        )
    }

    private fun authenticationParams(entry: Map<String, String>) = AuthenticationParams(
        identifier = entry.safeExtract("identifier")
    )

    private data class AuthenticationParams(
        val identifier: TestContextKey
    )
}
