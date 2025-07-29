package io.komune.registry.test.control.core.cccev.certification.command

import io.cucumber.java8.En
import io.komune.registry.control.core.cccev.CccevFlatGraph
import io.komune.registry.control.core.cccev.certification.CertificationAggregateService
import io.komune.registry.control.core.cccev.certification.command.CertificationAddRequirementsCommand
import io.komune.registry.control.core.cccev.certification.entity.CertificationRepository
import io.komune.registry.control.core.cccev.flattenTo
import io.komune.registry.test.RgCucumberStepsDefinition
import org.springframework.beans.factory.annotation.Autowired
import s2.bdd.data.TestContextKey
import s2.bdd.data.parser.safeExtractList

class CertificationAddRequirementsSteps: En, RgCucumberStepsDefinition() {

    @Autowired
    private lateinit var certificationAggregateService: CertificationAggregateService

    @Autowired
    private lateinit var certificationRepository: CertificationRepository

    private lateinit var command: CertificationAddRequirementsCommand

    init {
        DataTableType(::certificationAddRequirementsParams)

        When("I add requirements to the certification:") { params: CertificationAddRequirementsParams ->
            step {
                addRequirements(params)
            }
        }

        Given("Some requirements are added to the certification:") { params: CertificationAddRequirementsParams ->
            step {
                addRequirements(params)
            }
        }
    }

    private suspend fun addRequirements(params: CertificationAddRequirementsParams) {
        command = CertificationAddRequirementsCommand(
            id = context.cccev.certificationIds[params.identifier] ?: params.identifier,
            parentId = null,
            requirementIdentifiers = params.requirements,
        )
        certificationAggregateService.addRequirements(command)

        val graph = CccevFlatGraph()
        certificationRepository.findById(command.id)!!.flattenTo(graph)

        graph.requirementCertifications.forEach { (_, requirementCertification) ->
            val key = params.identifier to requirementCertification.requirementIdentifier
            context.cccev.requirementCertificationIds[key] = requirementCertification.id
        }
    }

    private fun certificationAddRequirementsParams(entry: Map<String, String>) = CertificationAddRequirementsParams(
        identifier = entry["identifier"] ?: context.cccev.certificationIds.lastUsedKey,
        requirements = entry.safeExtractList("requirements")
    )

    private data class CertificationAddRequirementsParams(
        val identifier: TestContextKey,
        val requirements: List<TestContextKey>
    )
}
