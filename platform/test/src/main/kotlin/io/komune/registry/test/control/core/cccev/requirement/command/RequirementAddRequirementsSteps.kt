package io.komune.registry.test.control.core.cccev.requirement.command

import io.cucumber.java8.En
import io.komune.registry.control.core.cccev.requirement.RequirementAggregateService
import io.komune.registry.control.core.cccev.requirement.command.RequirementAddRequirementsCommand
import io.komune.registry.control.core.cccev.requirement.entity.RequirementRepository
import io.komune.registry.test.RgCucumberStepsDefinition
import io.komune.registry.test.control.core.cccev.requirement.data.requirement
import org.springframework.beans.factory.annotation.Autowired
import s2.bdd.assertion.AssertionBdd
import s2.bdd.data.TestContextKey
import s2.bdd.data.parser.safeExtractList

class RequirementAddRequirementsSteps: En, RgCucumberStepsDefinition() {

    @Autowired
    private lateinit var requirementAggregateService: RequirementAggregateService

    @Autowired
    private lateinit var requirementRepository: RequirementRepository

    private lateinit var command: RequirementAddRequirementsCommand

    init {
        DataTableType(::requirementAddRequirementsParams)
        DataTableType(::requirementAssertParams)

        When("I add sub-requirements to the requirement:") { params: RequirementAddRequirementsParams ->
            step {
                addRequirement(params)
            }
        }

        Given("Some sub-requirements are added to the requirement:") { params: RequirementAddRequirementsParams ->
            step {
                addRequirement(params)
            }
        }

        Then("The requirement should contain the sub-requirements") {
            step {
                AssertionBdd.requirement(requirementRepository).assertThatId(command.id)
                    .hasRequirements(command.requirementIds)
            }
        }

        Then("The requirement should contain the sub-requirements:") { params: RequirementAssertParams ->
            step {
                val requirementId = context.cccev.requirementIds.safeGet(params.identifier)
                val subRequirementIds = params.requirements.map(context.cccev.requirementIds::safeGet)
                AssertionBdd.requirement(requirementRepository).assertThatId(requirementId)
                    .hasRequirements(subRequirementIds)
            }
        }
    }

    private suspend fun addRequirement(params: RequirementAddRequirementsParams) {
        command = RequirementAddRequirementsCommand(
            id = context.cccev.requirementIds[params.identifier] ?: params.identifier,
            requirementIds = params.requirements.map { context.cccev.requirementIds[it] ?: it }
        )
        requirementAggregateService.addRequirements(command)
    }

    private fun requirementAddRequirementsParams(entry: Map<String, String>) = RequirementAddRequirementsParams(
        identifier = entry["identifier"] ?: context.cccev.requirementIds.lastUsedKey,
        requirements = entry.safeExtractList("requirements"),
    )

    private data class RequirementAddRequirementsParams(
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
