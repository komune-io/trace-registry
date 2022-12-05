package city.smartb.registry.program.bdd.steps.exception

import city.smartb.registry.api.commons.exception.NotFoundException
import city.smartb.registry.program.bdd.CucumberStepsDefinition
import city.smartb.registry.program.bdd.assertion.AssertionBdd
import city.smartb.registry.program.bdd.assertion.exceptions
import city.smartb.registry.program.bdd.data.TestContextKey
import city.smartb.registry.program.bdd.data.parser.safeExtract
import io.cucumber.java8.En

class NotFoundExceptionAssertionSteps: En, CucumberStepsDefinition() {
    init {
        DataTableType(::notFoundParams)

        Then("The order should not be found") { assert(context.orderIds.lastUsedKey) }
        Then("The organization should not be found") { assert(context.organizationIds.lastUsedKey) }
        Then("The product should not be found") { assert(context.productIds.lastUsedKey) }
        Then("The project should not be found") { assert(context.projectIds.lastUsedKey) }
        Then("The quotation should not be found") { assert(context.quotationIds.lastUsedKey) }
        Then("The task should not be found") { assert(context.taskIds.lastUsedKey) }
        Then("The user should not be found") { assert(context.userIds.lastUsedKey) }
    }

    private fun assert(id: String) = step {
        AssertionBdd.exceptions(context)
            .assertThat(NotFoundException::class)
            .hasBeenThrown(1) { e -> e.id == id }
    }

    private fun notFoundParams(entry: Map<String, String>) = NotFoundParams(
        identifier = entry.safeExtract("identifier")
    )

    private data class NotFoundParams(
        val identifier: TestContextKey
    )
}
