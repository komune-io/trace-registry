package city.smartb.registry.program.bdd.steps.exception

import city.smartb.registry.api.commons.exception.ForbiddenAccessException
import city.smartb.registry.program.bdd.CucumberStepsDefinition
import city.smartb.registry.program.bdd.assertion.AssertionBdd
import city.smartb.registry.program.bdd.assertion.exceptions
import io.cucumber.java8.En

class ForbiddenExceptionAssertionSteps: En, CucumberStepsDefinition() {
    init {
        Then("I should be forbidden to do so") {
            step {
                AssertionBdd.exceptions(context)
                    .assertThat(ForbiddenAccessException::class)
                    .hasBeenThrown(1)
            }
        }

        Then("I should not be forbidden to do so") {
            step {
                AssertionBdd.exceptions(context)
                    .assertThat(ForbiddenAccessException::class)
                    .hasNotBeenThrown()
            }
        }
    }
}
