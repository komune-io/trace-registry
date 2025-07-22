package io.komune.registry.test.control.core.cccev.requirement.command

import io.cucumber.java8.En
import io.komune.registry.core.cccev.requirement.RequirementAggregateService
import io.komune.registry.core.cccev.requirement.command.RequirementRemoveRequirementsCommand
import io.komune.registry.core.cccev.requirement.entity.RequirementRepository
import io.komune.registry.test.RgCucumberStepsDefinition
import io.komune.registry.test.control.core.cccev.requirement.data.requirement
import org.springframework.beans.factory.annotation.Autowired
import s2.bdd.assertion.AssertionBdd
import s2.bdd.data.TestContextKey
import s2.bdd.data.parser.safeExtractList

class RequirementRemoveRequirementsSteps: En, RgCucumberStepsDefinition() {

    @Autowired
    private lateinit var requirementAggregateService: RequirementAggregateService

    @Autowired
    private lateinit var requirementRepository: RequirementRepository

    private lateinit var command: RequirementRemoveRequirementsCommand

    init {
        DataTableType(::requirementRemoveRequirementParams)
        DataTableType(::requirementAssertParams)

        When("I remove sub-requirements from the requirement:") { params: RequirementRemoveRequirementParams ->
            step {
                removeRequirement(params)
            }
        }

        Given("Some sub-requirements are removed from the requirement:") { params: RequirementRemoveRequirementParams ->
            step {
                removeRequirement(params)
            }
        }

        Then("The requirement should not contain the sub-requirements") {
            step {
                AssertionBdd.requirement(requirementRepository).assertThatId(command.id)
                    .doesNotHaveRequirements(command.requirementIds)
            }
        }

        Then("The requirement should not contain the sub-requirements:") { params: RequirementAssertParams ->
            step {
                val requirementId = context.cccev.requirementIds.safeGet(params.identifier)
                val subRequirementIds = params.requirements.map(context.cccev.requirementIds::safeGet)
                AssertionBdd.requirement(requirementRepository).assertThatId(requirementId)
                    .doesNotHaveRequirements(subRequirementIds)
            }
        }
    }

    private suspend fun removeRequirement(params: RequirementRemoveRequirementParams) {
        command = RequirementRemoveRequirementsCommand(
            id =  context.cccev.requirementIds.safeGet(params.identifier),
            requirementIds = params.requirements.map(context.cccev.requirementIds::safeGet)
        )
        requirementAggregateService.removeRequirements(command)
    }

    private fun requirementRemoveRequirementParams(entry: Map<String, String>) = RequirementRemoveRequirementParams(
        identifier = entry["identifier"] ?: context.cccev.requirementIds.lastUsedKey,
        requirements = entry.safeExtractList("requirements"),
    )

    private data class RequirementRemoveRequirementParams(
        val identifier: TestContextKey,
        val requirements: List<TestContextKey>
    )

    private fun requirementAssertParams(entry: Map<String, String>) = RequirementAssertParams(
        identifier = entry["identifier"] ?: context.cccev.requirementIds.lastUsedKey,
        requirements = entry.safeExtractList("requirements"),
    )

    private data class RequirementAssertParams(
        val identifier: TestContextKey,
        val requirements: List<TestContextKey>
    )
}
