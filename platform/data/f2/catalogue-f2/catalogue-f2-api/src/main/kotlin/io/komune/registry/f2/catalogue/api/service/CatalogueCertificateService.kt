package io.komune.registry.f2.catalogue.api.service

import io.komune.fs.s2.file.client.FileClient
import io.komune.fs.s2.file.domain.features.command.FileUploadedEvent
import io.komune.fs.s2.file.domain.model.FilePath
import io.komune.fs.spring.utils.toUploadCommand
import io.komune.registry.f2.catalogue.domain.dto.CatalogueDTOBase
import io.komune.registry.f2.cccev.domain.concept.model.InformationConceptComputedDTOBase
import io.komune.registry.infra.fs.FsPath
import io.komune.registry.infra.pdf.CertificateGenerator
import io.komune.registry.s2.catalogue.domain.model.CatalogueModel
import io.komune.registry.s2.commons.model.CatalogueId
import java.io.ByteArrayInputStream
import org.springframework.stereotype.Service

@Service
class CatalogueCertificateService(
    private val conceptService: CatalogueInformationConceptService,
    private val catalogueI18nService: CatalogueI18nService,
    private val fileClient: FileClient,
) : CatalogueCachedService() {

    suspend fun generateFiles(catalogueId: CatalogueId): ByteArrayInputStream? {
        val catalogue = catalogueFinderService.getByIdentifierOrNull(catalogueId)
        return catalogue?.let {
            catalogueI18nService.translateToDTO(catalogue, null, false )
            generateCatalogueFiles(it)
        }?.first()?.let { ByteArrayInputStream(it) }
    }

    suspend fun generateCatalogueFiles(catalogue: CatalogueModel): List<ByteArray> {
        val concepts: List<InformationConceptComputedDTOBase> = conceptService.computeAggregators(catalogue)
        val dto = catalogueI18nService.translateToDTO(catalogue, "fr", false )!!
        return concepts.mapNotNull { concept ->
            concept.value?.let { value ->
                generatePdf(dto, value, concept)
            }
        }
    }

    suspend fun generate(catalogue: CatalogueModel): List<FileUploadedEvent> {
        val concepts: List<InformationConceptComputedDTOBase> = conceptService.computeAggregators(catalogue)
        val dto = catalogueI18nService.translateToDTO(catalogue, null, false )!!
        return concepts.mapNotNull { concept ->
            concept.value?.let { value ->
                val result = generatePdf(dto, value, concept)
                val path = FilePath(
                    objectType = FsPath.Organization.TYPE,
                    objectId = catalogue.id,
                    directory = FsPath.Organization.CERTIFICATE,
                    name = "certificate-${catalogue.id}.pdf"
                )
                fileClient.fileUpload(path.toUploadCommand(), result)
            }
        }
    }

    private fun generatePdf(
        catalogue: CatalogueDTOBase,
        value: String,
        concept: InformationConceptComputedDTOBase
    ): ByteArray {
        return CertificateGenerator.fillFinalCertificate(
            transactionId = catalogue.id,
            date = catalogue.issued,
            issuedTo = catalogue.ownerOrganization?.name ?: "",
            quantity = value,
            indicator = concept.unit.toAbbreviationString(),
            title = catalogue.title,
            certifiedBy = catalogue.creatorOrganization?.name ?: ""
        )
    }
}
