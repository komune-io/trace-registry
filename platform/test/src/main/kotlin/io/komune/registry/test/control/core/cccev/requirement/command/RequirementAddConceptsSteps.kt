package io.komune.registry.test.control.core.cccev.requirement.command

import io.cucumber.java8.En
import io.komune.registry.control.core.cccev.requirement.RequirementAggregateService
import io.komune.registry.control.core.cccev.requirement.command.RequirementAddConceptsCommand
import io.komune.registry.control.core.cccev.requirement.entity.RequirementRepository
import io.komune.registry.test.RgCucumberStepsDefinition
import io.komune.registry.test.control.core.cccev.requirement.data.requirement
import org.springframework.beans.factory.annotation.Autowired
import s2.bdd.assertion.AssertionBdd
import s2.bdd.data.TestContextKey
import s2.bdd.data.parser.safeExtractList

class RequirementAddConceptsSteps: En, RgCucumberStepsDefinition() {

    @Autowired
    private lateinit var requirementAggregateService: RequirementAggregateService

    @Autowired
    private lateinit var requirementRepository: RequirementRepository

    private lateinit var command: RequirementAddConceptsCommand

    init {
        DataTableType(::requirementAddConceptsParams)
        DataTableType(::requirementAssertParams)

        When("I add information concepts to the requirement:") { params: RequirementAddConceptsParams ->
            step {
                addConcepts(params)
            }
        }

        Given("Some information concepts are added to the requirement:") { params: RequirementAddConceptsParams ->
            step {
                addConcepts(params)
            }
        }

        Then("The requirement should contain the information concepts") {
            step {
                AssertionBdd.requirement(requirementRepository).assertThatId(command.id)
                    .hasConcepts(command.conceptIds)
            }
        }

        Then("The requirement should contain the information concepts:") { params: RequirementAssertParams ->
            step {
                val requirementId = context.cccev.requirementIds.safeGet(params.identifier)
                val conceptIds = params.concepts.map(context.cccev.conceptIds::safeGet)
                AssertionBdd.requirement(requirementRepository).assertThatId(requirementId)
                    .hasConcepts(conceptIds)
            }
        }
    }

    private suspend fun addConcepts(params: RequirementAddConceptsParams) {
        command = RequirementAddConceptsCommand(
            id = context.cccev.requirementIds[params.identifier] ?: params.identifier,
            conceptIds = params.concepts.map { context.cccev.conceptIds[it] ?: it }
        )
        requirementAggregateService.addConcepts(command)
    }

    private fun requirementAddConceptsParams(entry: Map<String, String>) = RequirementAddConceptsParams(
        identifier = entry["identifier"] ?: context.cccev.requirementIds.lastUsedKey,
        concepts = entry.safeExtractList("concepts"),
    )

    private data class RequirementAddConceptsParams(
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
