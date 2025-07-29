package io.komune.registry.test.control.core.cccev.certification.command

import io.cucumber.datatable.DataTable
import io.cucumber.java8.En
import io.komune.registry.api.commons.utils.mapAsync
import io.komune.registry.control.core.cccev.CccevFlatGraph
import io.komune.registry.control.core.cccev.certification.CertificationAggregateService
import io.komune.registry.control.core.cccev.certification.command.CertificationCreateCommand
import io.komune.registry.control.core.cccev.certification.entity.CertificationRepository
import io.komune.registry.control.core.cccev.flattenTo
import io.komune.registry.test.CertificationKey
import io.komune.registry.test.RequirementKey
import io.komune.registry.test.RgCucumberStepsDefinition
import io.komune.registry.test.SupportedValueKey
import io.komune.registry.test.control.core.cccev.certification.data.requirementCertification
import org.assertj.core.api.Assertions
import org.springframework.beans.factory.annotation.Autowired
import s2.bdd.assertion.AssertionBdd
import s2.bdd.data.parser.extractList
import s2.bdd.data.parser.safeExtract

class CertificationCreateSteps: En, RgCucumberStepsDefinition() {

    @Autowired
    private lateinit var certificationAggregateService: CertificationAggregateService

    @Autowired
    private lateinit var certificationRepository: CertificationRepository

    private lateinit var command: CertificationCreateCommand

    init {
        DataTableType(::certificationCreateParams)
        DataTableType(::requirementCertificationAssertParams)

        When("I create a certification") {
            step {
                createCertification(certificationCreateParams(null))
            }
        }

        When("I create a certification:") { params: CertificationCreateParams ->
            step {
                createCertification(params)
            }
        }

        Given("A certification is created") {
            step {
                createCertification(certificationCreateParams(null))
            }
        }

        Given("A certification is created:") { params: CertificationCreateParams ->
            step {
                createCertification(params)
            }
        }

        Given("Some certifications are created:") { dataTable: DataTable ->
            step {
                dataTable.asList(CertificationCreateParams::class.java)
                    .forEach { createCertification(it) }
            }
        }

        Then("The requirement certifications should be created:") { dataTable: DataTable ->
            step {
                dataTable.asList(RequirementCertificationAssertParams::class.java)
                    .mapAsync(::assertRequirementCertification)
            }
        }
    }

    private suspend fun createCertification(params: CertificationCreateParams) {
        command = CertificationCreateCommand(
            id = params.identifier,
            requirementIdentifiers = params.requirements
        )
        val certificationId = certificationAggregateService.create(command).id
        context.cccev.certificationIds[params.identifier] = certificationId

        val graph = CccevFlatGraph()
        certificationRepository.findById(certificationId)!!.flattenTo(graph)

        graph.requirementCertifications.forEach { (_, requirementCertification) ->
            val key = params.identifier to requirementCertification.requirementIdentifier
            context.cccev.requirementCertificationIds[key] = requirementCertification.id
        }
    }

    private suspend fun assertRequirementCertification(params: RequirementCertificationAssertParams) {
        val requirementCertificationId = context.cccev.requirementCertificationIds.safeGet(params.certification to params.requirement)
        val requirementCertification = certificationRepository.findRequirementCertificationById(requirementCertificationId)

        Assertions.assertThat(requirementCertification).isNotNull()
        AssertionBdd.requirementCertification(certificationRepository).assertThat(requirementCertification!!)
            .hasFields(
                subCertificationIds = params.subCertifications?.map {
                    context.cccev.requirementCertificationIds.safeGet(params.certification to it)
                } ?: requirementCertification.subCertifications.map { it.id },
                values = params.values?.map { context.cccev.supportedValueIds.safeGet(it) }
                    ?: requirementCertification.values.map { it.id },
                isEnabled = params.isEnabled ?: requirementCertification.isEnabled,
                isValidated = params.isValidated ?: requirementCertification.isValidated,
                hasAllValues = params.hasAllValues ?: requirementCertification.hasAllValues,
                areEvidencesProvided = params.areEvidencesProvided ?: requirementCertification.areEvidencesProvided,
                isFulfilled = params.isFulfilled ?: requirementCertification.isFulfilled
            )
    }

    private fun certificationCreateParams(entry: Map<String, String>?) = CertificationCreateParams(
        identifier = entry?.get("identifier").orRandom(),
        requirements = entry?.extractList("requirements") ?: emptyList()
    )

    private fun requirementCertificationAssertParams(entry: Map<String, String>) = RequirementCertificationAssertParams(
        certification = entry["certification"] ?: context.cccev.certificationIds.lastUsedKey,
        requirement = entry.safeExtract("requirement"),
        subCertifications = entry.extractList<RequirementKey>("subCertifications").orEmpty().takeIf { "subCertifications" in entry },
        values = entry.extractList<SupportedValueKey>("values").orEmpty().takeIf { "values" in entry },
        isEnabled = entry["isEnabled"]?.toBoolean(),
        isValidated = entry["isValidated"]?.toBoolean(),
        hasAllValues = entry["hasAllValues"]?.toBoolean(),
        areEvidencesProvided = entry["areEvidencesProvided"]?.toBoolean(),
        isFulfilled = entry["isFulfilled"]?.toBoolean()
    )

    private data class CertificationCreateParams(
        val identifier: CertificationKey,
        val requirements: List<RequirementKey>
    )

    private data class RequirementCertificationAssertParams(
        val certification: CertificationKey,
        val requirement: RequirementKey,
        val subCertifications: List<RequirementKey>?,
        val values: List<SupportedValueKey>?,
        val isEnabled: Boolean?,
        val isValidated: Boolean?,
        val hasAllValues: Boolean?,
        val areEvidencesProvided: Boolean?,
        val isFulfilled: Boolean?
    )
}
