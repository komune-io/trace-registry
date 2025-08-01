package io.komune.registry.test.control.core.cccev.requirement.command

import io.cucumber.java8.En
import io.komune.registry.control.core.cccev.requirement.RequirementAggregateService
import io.komune.registry.control.core.cccev.requirement.command.RequirementAddEvidenceTypesCommand
import io.komune.registry.control.core.cccev.requirement.entity.RequirementRepository
import io.komune.registry.test.EvidenceTypeKey
import io.komune.registry.test.RequirementKey
import io.komune.registry.test.RgCucumberStepsDefinition
import io.komune.registry.test.control.core.cccev.requirement.data.requirement
import org.springframework.beans.factory.annotation.Autowired
import s2.bdd.assertion.AssertionBdd
import s2.bdd.data.parser.safeExtractList

class RequirementAddEvidenceTypesSteps: En, RgCucumberStepsDefinition() {

    @Autowired
    private lateinit var requirementAggregateService: RequirementAggregateService

    @Autowired
    private lateinit var requirementRepository: RequirementRepository

    private lateinit var command: RequirementAddEvidenceTypesCommand

    init {
        DataTableType(::requirementAddEvidenceTypesParams)
        DataTableType(::requirementAssertParams)

        When("I add evidence types to the requirement:") { params: RequirementAddEvidenceTypesParams ->
            step {
                addEvidenceTypes(params)
            }
        }

        Given("Some evidence types are added to the requirement:") { params: RequirementAddEvidenceTypesParams ->
            step {
                addEvidenceTypes(params)
            }
        }

        Then("The requirement should contain the evidence types") {
            step {
                AssertionBdd.requirement(requirementRepository).assertThatId(command.id)
                    .hasEvidenceTypes(command.evidenceTypeIds)
            }
        }

        Then("The requirement should contain the evidence types:") { params: RequirementAssertParams ->
            step {
                val requirementId = context.cccev.requirementIds.safeGet(params.identifier)
                val evidenceTypeIds = params.evidenceTypes.map(context.cccev.evidenceTypeIds::safeGet)
                AssertionBdd.requirement(requirementRepository).assertThatId(requirementId)
                    .hasEvidenceTypes(evidenceTypeIds)
            }
        }
    }

    private suspend fun addEvidenceTypes(params: RequirementAddEvidenceTypesParams) {
        command = RequirementAddEvidenceTypesCommand(
            id = context.cccev.requirementIds[params.identifier] ?: params.identifier,
            evidenceTypeIds = params.evidenceTypes.map { context.cccev.evidenceTypeIds[it] ?: it },
            evidenceValidatingCondition = null
        )
        requirementAggregateService.addEvidenceTypes(command)
    }

    private fun requirementAddEvidenceTypesParams(entry: Map<String, String>) = RequirementAddEvidenceTypesParams(
        identifier = entry["identifier"] ?: context.cccev.requirementIds.lastUsedKey,
        evidenceTypes = entry.safeExtractList("evidenceTypes"),
    )

    private data class RequirementAddEvidenceTypesParams(
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
