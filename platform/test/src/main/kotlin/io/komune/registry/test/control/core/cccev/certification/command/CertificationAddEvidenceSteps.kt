package io.komune.registry.test.control.core.cccev.certification.command

import io.cucumber.datatable.DataTable
import io.cucumber.java8.En
import io.komune.fs.s2.file.client.FileClient
import io.komune.fs.s2.file.domain.model.FilePath
import io.komune.registry.control.core.cccev.certification.CertificationAggregateService
import io.komune.registry.control.core.cccev.certification.command.CertificationAddEvidenceCommand
import io.komune.registry.control.core.cccev.certification.entity.CertificationRepository
import io.komune.registry.test.CertificationKey
import io.komune.registry.test.EvidenceKey
import io.komune.registry.test.EvidenceTypeKey
import io.komune.registry.test.RgCucumberStepsDefinition
import io.komune.registry.test.control.core.cccev.certification.data.evidence
import org.assertj.core.api.Assertions
import org.springframework.beans.factory.annotation.Autowired
import s2.bdd.assertion.AssertionBdd
import java.util.UUID

class CertificationAddEvidenceSteps: En, RgCucumberStepsDefinition() {

    @Autowired
    private lateinit var certificationAggregateService: CertificationAggregateService

    @Autowired
    private lateinit var certificationRepository: CertificationRepository

    @Autowired
    private lateinit var fileClient: FileClient

    private lateinit var command: CertificationAddEvidenceCommand

    init {
        DataTableType(::certificationAddEvidenceParams)
        DataTableType(::evidenceAssertParams)

        When("I add an evidence to the certification:") { params: CertificationAddEvidenceParams ->
            step {
                addEvidence(params)
            }
        }

        Given("An evidence is added to the certification:") { params: CertificationAddEvidenceParams ->
            step {
                addEvidence(params)
            }
        }

        Given("Some evidences are added to the certifications:") { dataTable: DataTable ->
            step {
                dataTable.asList(CertificationAddEvidenceParams::class.java)
                    .forEach { addEvidence(it) }
            }
        }

        Then("The evidences should be created") {
            step {
                val evidenceId = context.cccev.evidenceIds.lastUsed
                val evidence = certificationRepository.findEvidenceById(evidenceId)
                Assertions.assertThat(evidence).isNotNull

                AssertionBdd.evidence(certificationRepository).assertThat(evidence!!)
                    .hasFields(
                        filePath = command.filePath ?: evidence.file,
                        evidenceTypeId = command.evidenceTypeId
                    )

                command.filePath?.let {
                    val file = fileClient.fileGet(listOf(it)).first().item
                    Assertions.assertThat(file).isNotNull
                }
            }
        }

        Then("The evidences should be created:") { dataTable: DataTable ->
            step {
                dataTable.asList(EvidenceAssertParams::class.java)
                    .forEach { params ->
                        val evidenceId = context.cccev.evidenceIds.safeGet(params.identifier)
                        val evidence = certificationRepository.findEvidenceById(evidenceId)
                        Assertions.assertThat(evidence).isNotNull

                        AssertionBdd.evidence(certificationRepository).assertThat(evidence!!)
                            .hasFields(
                                filePath = params.path?.let { FilePath.from(it) } ?: evidence.file,
                                evidenceTypeId = params.evidenceType?.let(context.cccev.evidenceTypeIds::safeGet)
                                    ?: evidence.evidenceType.id
                            )

                        params.path?.let {
                            val file = fileClient.fileGet(listOf(FilePath.from(it))).first().item
                            Assertions.assertThat(file).isNotNull
                        }
                    }
            }
        }
    }

    private suspend fun addEvidence(params: CertificationAddEvidenceParams) = context.cccev.evidenceIds.register(params.identifier) {
        command = CertificationAddEvidenceCommand(
            id = context.cccev.certificationIds[params.certification] ?: params.certification,
            rootRequirementCertificationId = null,
            evidenceTypeId = context.cccev.evidenceTypeIds[params.evidenceType] ?: params.evidenceType,
            filePath = params.path?.let { FilePath.from(it) }
        )
        certificationAggregateService.addEvidence(
            command = command,
            file = byteArrayOf(),
            filename = UUID.randomUUID().toString()
        ).evidenceId
    }

    private fun certificationAddEvidenceParams(entry: Map<String, String>?) = CertificationAddEvidenceParams(
        identifier = entry?.get("identifier").orRandom(),
        certification = entry?.get("certification") ?: context.cccev.certificationIds.lastUsedKey,
        evidenceType = entry?.get("evidenceType") ?: context.cccev.evidenceTypeIds.lastUsedKey,
        path = entry?.get("path")
    )

    private fun evidenceAssertParams(entry: Map<String, String>) = EvidenceAssertParams(
        identifier = entry["identifier"] ?: context.cccev.evidenceIds.lastUsedKey,
        evidenceType = entry["evidenceType"]?.let(context.cccev.evidenceTypeIds::safeGet),
        path = entry["path"]
    )

    private data class CertificationAddEvidenceParams(
        val identifier: EvidenceKey,
        val certification: CertificationKey,
        val evidenceType: EvidenceTypeKey,
        val path: String?
    )

    private data class EvidenceAssertParams(
        val identifier: EvidenceKey,
        val evidenceType: EvidenceTypeKey?,
        val path: String?
    )
}
