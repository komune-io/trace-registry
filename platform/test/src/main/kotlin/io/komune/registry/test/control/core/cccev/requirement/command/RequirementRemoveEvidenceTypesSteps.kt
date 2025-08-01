package io.komune.registry.test.control.core.cccev.requirement.command

import io.cucumber.java8.En
import io.komune.registry.control.core.cccev.requirement.RequirementAggregateService
import io.komune.registry.control.core.cccev.requirement.command.RequirementRemoveEvidenceTypesCommand
import io.komune.registry.control.core.cccev.requirement.entity.RequirementRepository
import io.komune.registry.test.EvidenceTypeKey
import io.komune.registry.test.RequirementKey
import io.komune.registry.test.RgCucumberStepsDefinition
import io.komune.registry.test.control.core.cccev.requirement.data.requirement
import org.springframework.beans.factory.annotation.Autowired
import s2.bdd.assertion.AssertionBdd
import s2.bdd.data.parser.safeExtractList

class RequirementRemoveEvidenceTypesSteps: En, RgCucumberStepsDefinition() {

    @Autowired
    private lateinit var requirementAggregateService: RequirementAggregateService

    @Autowired
    private lateinit var requirementRepository: RequirementRepository

    private lateinit var command: RequirementRemoveEvidenceTypesCommand

    init {
        DataTableType(::requirementRemoveEvidenceTypesParams)
        DataTableType(::requirementAssertParams)

        When("I remove evidence types from the requirement:") { params: RequirementRemoveEvidenceTypesParams ->
            step {
                removeEvidenceTypes(params)
            }
        }

        Given("Some evidence types are removed from the requirement:") { params: RequirementRemoveEvidenceTypesParams ->
            step {
                removeEvidenceTypes(params)
            }
        }

        Then("The requirement should not contain the evidence types") {
            step {
                AssertionBdd.requirement(requirementRepository).assertThatId(command.id)
                    .doesNotHaveEvidenceTypes(command.evidenceTypeIds)
            }
        }

        Then("The requirement should not contain the evidence types:") { params: RequirementAssertParams ->
            step {
                val requirementId = context.cccev.requirementIds.safeGet(params.identifier)
                val evidenceTypeIds = params.evidenceTypes.map(context.cccev.evidenceTypeIds::safeGet)
                AssertionBdd.requirement(requirementRepository).assertThatId(requirementId)
                    .doesNotHaveEvidenceTypes(evidenceTypeIds)
            }
        }
    }

    private suspend fun removeEvidenceTypes(params: RequirementRemoveEvidenceTypesParams) {
        command = RequirementRemoveEvidenceTypesCommand(
            id = context.cccev.requirementIds[params.identifier] ?: params.identifier,
            evidenceTypeIds = params.evidenceTypes.map { context.cccev.evidenceTypeIds[it] ?: it },
            evidenceValidatingCondition = null
        )
        requirementAggregateService.removeEvidenceTypes(command)
    }

    private fun requirementRemoveEvidenceTypesParams(entry: Map<String, String>) = RequirementRemoveEvidenceTypesParams(
        identifier = entry["identifier"] ?: context.cccev.requirementIds.lastUsedKey,
        evidenceTypes = entry.safeExtractList("evidenceTypes"),
    )

    private data class RequirementRemoveEvidenceTypesParams(
        val identifier: RequirementKey,
        val evidenceTypes: List<EvidenceTypeKey>
    )

    private fun requirementAssertParams(entry: Map<String, String>) = RequirementAssertParams(
        identifier = entry["identifier"] ?: context.cccev.requirementIds.lastUsedKey,
        evidenceTypes = entry.safeExtractList("evidenceTypes"),
    )

    private data class RequirementAssertParams(
        val identifier: RequirementKey,
        val evidenceTypes: List<EvidenceTypeKey>
    )
}
