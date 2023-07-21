package city.smartb.registry.program.ver.test.auth

import city.smartb.registry.program.ver.test.VerCucumberStepsDefinition
import io.cucumber.java8.En
import s2.bdd.data.TestContextKey
import s2.bdd.data.parser.safeExtract

class AuthenticationSteps: En, VerCucumberStepsDefinition() {

    init {
        DataTableType(::authenticationParams)

        Given("I am authenticated as:") { params: AuthenticationParams ->
            step {
                context.authedUser = context.users.safeGet(params.identifier)
            }
        }

        Given("I am not authenticated") {
            step {
                context.authedUser = null
            }
        }
    }

    private fun authenticationParams(entry: Map<String, String>) = AuthenticationParams(
        identifier = entry.safeExtract("identifier")
    )

    private data class AuthenticationParams(
        val identifier: TestContextKey
    )
}
