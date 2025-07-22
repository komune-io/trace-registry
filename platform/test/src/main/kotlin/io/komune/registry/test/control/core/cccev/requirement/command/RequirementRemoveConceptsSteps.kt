package io.komune.registry.test.control.core.cccev.requirement.command

import io.cucumber.java8.En
import io.komune.registry.core.cccev.requirement.RequirementAggregateService
import io.komune.registry.core.cccev.requirement.command.RequirementRemoveConceptsCommand
import io.komune.registry.core.cccev.requirement.entity.RequirementRepository
import io.komune.registry.test.RgCucumberStepsDefinition
import io.komune.registry.test.control.core.cccev.requirement.data.requirement
import org.springframework.beans.factory.annotation.Autowired
import s2.bdd.assertion.AssertionBdd
import s2.bdd.data.TestContextKey
import s2.bdd.data.parser.safeExtractList

class RequirementRemoveConceptsSteps: En, RgCucumberStepsDefinition() {

    @Autowired
    private lateinit var requirementAggregateService: RequirementAggregateService

    @Autowired
    private lateinit var requirementRepository: RequirementRepository

    private lateinit var command: RequirementRemoveConceptsCommand

    init {
        DataTableType(::requirementRemoveConceptsParams)
        DataTableType(::requirementAssertParams)

        When("I remove information concepts from the requirement:") { params: RequirementRemoveConceptsParams ->
            step {
                removeConcepts(params)
            }
        }

        Given("Some information concepts are removed from the requirement:") { params: RequirementRemoveConceptsParams ->
            step {
                removeConcepts(params)
            }
        }

        Then("The requirement should not contain the information concepts") {
            step {
                AssertionBdd.requirement(requirementRepository).assertThatId(command.id)
                    .doesNotHaveConcepts(command.conceptIds)
            }
        }

        Then("The requirement should not contain the information concepts:") { params: RequirementAssertParams ->
            step {
                val requirementId = context.cccev.requirementIds.safeGet(params.identifier)
                val conceptIds = params.concepts.map(context.cccev.conceptIds::safeGet)
                AssertionBdd.requirement(requirementRepository).assertThatId(requirementId)
                    .doesNotHaveConcepts(conceptIds)
            }
        }
    }

    private suspend fun removeConcepts(params: RequirementRemoveConceptsParams) {
        command = RequirementRemoveConceptsCommand(
            id = context.cccev.requirementIds[params.identifier] ?: params.identifier,
            conceptIds = params.concepts.map { context.cccev.conceptIds[it] ?: it }
        )
        requirementAggregateService.removeConcepts(command)
    }

    private fun requirementRemoveConceptsParams(entry: Map<String, String>) = RequirementRemoveConceptsParams(
        identifier = entry["identifier"] ?: context.cccev.requirementIds.lastUsedKey,
        concepts = entry.safeExtractList("concepts"),
    )

    private data class RequirementRemoveConceptsParams(
        val identifier: TestContextKey,
        val concepts: List<TestContextKey>
    )

    private fun requirementAssertParams(entry: Map<String, String>) = RequirementAssertParams(
        identifier = entry["identifier"] ?: context.cccev.requirementIds.lastUsedKey,
        concepts = entry.safeExtractList("concepts"),
    )

    private data class RequirementAssertParams(
        val identifier: TestContextKey,
        val concepts: List<TestContextKey>
    )
}
