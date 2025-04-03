package io.komune.registry.f2.catalogue.api.service

import io.komune.registry.f2.catalogue.domain.dto.CatalogueDTOBase
import io.komune.registry.f2.cccev.domain.concept.model.InformationConceptComputedDTOBase
import io.komune.registry.infra.pdf.SvgCertificateGenerator
import io.komune.registry.s2.catalogue.domain.model.CatalogueModel
import io.komune.registry.s2.commons.model.CatalogueId
import java.io.ByteArrayInputStream
import org.springframework.stereotype.Service

@Service
class CatalogueCertificateService(
    private val conceptService: CatalogueInformationConceptService,
    private val catalogueI18nService: CatalogueI18nService,
) : CatalogueCachedService() {

    suspend fun generateFiles(catalogueId: CatalogueId): ByteArrayInputStream? {
        val catalogue = catalogueFinderService.getOrNull(catalogueId)
        return catalogue?.let {
            generateCatalogueFiles(catalogue)
        }?.let { ByteArrayInputStream(it) }
    }

    suspend fun generateCatalogueFiles(catalogue: CatalogueModel): ByteArray? {
        val model = catalogueI18nService.translate(catalogue, "fr", true )!!
        val concepts: List<InformationConceptComputedDTOBase> = conceptService.computeAggregators(model)
        val dto = catalogueI18nService.translateToDTO(catalogue, "fr", true )!!
        return concepts.find { it.identifier == "avoided-ghg" }?.let { concept ->
            generatePdf(dto, concept.value, concept)
        }
    }

    private fun generatePdf(
        catalogue: CatalogueDTOBase,
        value: String,
        concept: InformationConceptComputedDTOBase
    ): ByteArray {
        return SvgCertificateGenerator.fillFinalCertificate(
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
