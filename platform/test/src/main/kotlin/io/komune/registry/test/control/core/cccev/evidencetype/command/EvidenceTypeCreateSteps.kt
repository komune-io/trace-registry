package io.komune.registry.test.control.core.cccev.evidencetype.command

import io.cucumber.datatable.DataTable
import io.cucumber.java8.En
import io.komune.registry.core.cccev.evidencetype.EvidenceTypeAggregateService
import io.komune.registry.core.cccev.evidencetype.command.EvidenceTypeCreateCommand
import io.komune.registry.core.cccev.evidencetype.entity.EvidenceTypeRepository
import io.komune.registry.test.EvidenceTypeKey
import io.komune.registry.test.InformationConceptKey
import io.komune.registry.test.RgCucumberStepsDefinition
import io.komune.registry.test.control.core.cccev.evidencetype.data.evidenceType
import org.assertj.core.api.Assertions
import org.springframework.beans.factory.annotation.Autowired
import s2.bdd.assertion.AssertionBdd
import s2.bdd.data.TestContextKey
import s2.bdd.data.parser.extractList

class EvidenceTypeCreateSteps: En, RgCucumberStepsDefinition() {

    @Autowired
    private lateinit var evidenceTypeAggregateService: EvidenceTypeAggregateService

    @Autowired
    private lateinit var evidenceTypeRepository: EvidenceTypeRepository

    private lateinit var command: EvidenceTypeCreateCommand

    init {
        DataTableType(::evidenceTypeCreateParams)
        DataTableType(::evidenceTypeAssertParams)

        When("I create an evidence type") {
            step {
                createEvidenceType(evidenceTypeCreateParams(null))
            }
        }

        When("I create an evidence type:") { params: EvidenceTypeCreateParams ->
            step {
                createEvidenceType(params)
            }
        }

        Given("An evidence type is created") {
            step {
                createEvidenceType(evidenceTypeCreateParams(null))
            }
        }

        Given("An evidence type is created:") { params: EvidenceTypeCreateParams ->
            step {
                createEvidenceType(params)
            }
        }

        Given("Some evidence types are created:") { dataTable: DataTable ->
            step {
                dataTable.asList(EvidenceTypeCreateParams::class.java)
                    .forEach { createEvidenceType(it) }
            }
        }

        Then("The evidence type should be created") {
            step {
                val evidenceTypeId = context.cccev.evidenceTypeIds.lastUsed
                AssertionBdd.evidenceType(evidenceTypeRepository).assertThatId(evidenceTypeId).hasFields(
                    name = command.name,
                    concepts = command.conceptIdentifiers.map(context.cccev.conceptIds::safeGet)
                )
            }
        }

        Then("The evidence type should be created:") { params: EvidenceTypeAssertParams ->
            step {
                val evidenceTypeId = context.cccev.evidenceTypeIds.safeGet(params.identifier)
                val evidenceType = evidenceTypeRepository.findById(evidenceTypeId)
                Assertions.assertThat(evidenceType).isNotNull

                AssertionBdd.evidenceType(evidenceTypeRepository).assertThat(evidenceType!!).hasFields(
                    name = params.name ?: evidenceType.name,
                    concepts = params.concepts?.map(context.cccev.conceptIds::safeGet) ?: evidenceType.concepts.map { it.id }
                )
            }
        }
    }

    private suspend fun createEvidenceType(params: EvidenceTypeCreateParams) = context.cccev.evidenceTypeIds.register(params.identifier) {
        command = EvidenceTypeCreateCommand(
            id = params.identifier,
            name = params.name,
            conceptIdentifiers = params.concepts
        )
        evidenceTypeAggregateService.create(command).id
    }

    private fun evidenceTypeCreateParams(entry: Map<String, String>?) = EvidenceTypeCreateParams(
        identifier = entry?.get("identifier").orRandom(),
        name = entry?.get("name").orRandom(),
        concepts = entry?.extractList("concepts") ?: emptyList()
    )

    private data class EvidenceTypeCreateParams(
        val identifier: EvidenceTypeKey,
        val name: String,
        val concepts: List<InformationConceptKey>,
    )

    private fun evidenceTypeAssertParams(entry: Map<String, String>) = EvidenceTypeAssertParams(
        identifier = entry["identifier"] ?: context.cccev.evidenceTypeIds.lastUsedKey,
        name = entry["name"],
        concepts = entry.extractList<InformationConceptKey>("concepts").orEmpty().takeIf { "concepts" in entry }
    )

    private data class EvidenceTypeAssertParams(
        val identifier: TestContextKey,
        val name: String?,
        val concepts: List<InformationConceptKey>?,
    )
}
