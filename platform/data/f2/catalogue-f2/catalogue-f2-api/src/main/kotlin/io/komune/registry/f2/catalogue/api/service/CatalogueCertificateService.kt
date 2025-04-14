package io.komune.registry.f2.catalogue.api.service

import io.komune.registry.api.config.ui.UIProperties
import io.komune.registry.f2.catalogue.domain.dto.CatalogueDTOBase
import io.komune.registry.f2.cccev.domain.concept.model.InformationConceptComputedDTOBase
import io.komune.registry.infra.pdf.SvgCertificateGenerator
import io.komune.registry.s2.catalogue.domain.model.CatalogueModel
import io.komune.registry.s2.commons.model.CatalogueId
import org.springframework.stereotype.Service
import java.io.ByteArrayInputStream
import java.math.RoundingMode

@Service
class CatalogueCertificateService(
    private val conceptService: CatalogueInformationConceptService,
    private val catalogueI18nService: CatalogueI18nService,
    private val uiProperties: UIProperties,
) : CatalogueCachedService() {

    companion object {
        const val COUNTER_CO2 = "counter-co2e"
    }

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
        return concepts.find { it.identifier == COUNTER_CO2 }?.let { concept ->
            generatePdf(dto, concept.value, concept)
        }
    }

    private fun generatePdf(
        catalogue: CatalogueDTOBase,
        value: String,
        concept: InformationConceptComputedDTOBase
    ): ByteArray {
        return SvgCertificateGenerator.fillFinalCertificate(
            title = catalogue.title,
            transactionId = catalogue.id,
            date = catalogue.issued,
            certifiedBy = catalogue.creatorOrganization?.name ?: "",
            issuedTo = catalogue.stakeholder ?: "",
            indicatorValue = value.toBigDecimal().setScale(1, RoundingMode.HALF_UP).stripTrailingZeros().toPlainString(),
            indicatorUnit = concept.unit.toNameString(),
            url = uiProperties.getCatalogueUrl(catalogue.id),
            subUnit = concept.aggregatedValue
        )
    }

}
