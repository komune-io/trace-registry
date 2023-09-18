package city.smartb.registry.ver.test.auth

import io.cucumber.java8.En
import s2.bdd.data.TestContextKey
import s2.bdd.data.parser.safeExtract

class AuthenticationSteps: En, city.smartb.registry.ver.test.VerCucumberStepsDefinition() {

    init {
        DataTableType(::authenticationParams)

        Given("I am authenticated as:") { params: city.smartb.registry.ver.test.auth.AuthenticationSteps.AuthenticationParams ->
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

    private fun authenticationParams(entry: Map<String, String>) =
        city.smartb.registry.ver.test.auth.AuthenticationSteps.AuthenticationParams(
            identifier = entry.safeExtract("identifier")
        )

    private data class AuthenticationParams(
        val identifier: TestContextKey
    )
}
