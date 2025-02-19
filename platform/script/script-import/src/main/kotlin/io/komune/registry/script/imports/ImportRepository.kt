package io.komune.registry.script.imports

import cccev.dsl.client.DataClient
import f2.dsl.cqrs.exception.F2Exception
import f2.dsl.fnc.invokeWith
import io.komune.registry.f2.catalogue.domain.dto.CatalogueDTOBase
import io.komune.registry.f2.catalogue.domain.query.CatalogueGetByIdentifierQuery
import io.komune.registry.f2.concept.domain.query.ConceptGetByIdentifierQuery
import io.komune.registry.f2.dataset.client.datasetAddMediaDistribution
import io.komune.registry.f2.dataset.domain.command.DatasetAddMediaDistributionCommandDTOBase
import io.komune.registry.f2.dataset.domain.command.DatasetCreateCommandDTOBase
import io.komune.registry.f2.dataset.domain.query.DatasetGetByIdentifierQuery
import io.komune.registry.f2.license.domain.query.LicenseGetByIdentifierQuery
import io.komune.registry.s2.catalogue.domain.command.DatasetId
import io.komune.registry.s2.commons.model.CatalogueDraftId
import io.komune.registry.s2.commons.model.Language
import io.komune.registry.s2.commons.model.SimpleFile
import io.komune.registry.s2.concept.domain.command.ConceptCreateCommand
import io.komune.registry.s2.dataset.domain.automate.DatasetIdentifier
import io.komune.registry.s2.dataset.domain.model.DistributionId
import io.komune.registry.s2.license.domain.command.LicenseCreateCommand
import io.komune.registry.script.imports.model.CatalogueImportData
import io.komune.registry.script.imports.model.ConceptInitData
import io.komune.registry.script.imports.model.LicenseInitData
import org.slf4j.LoggerFactory

class ImportRepository(
    private val dataClient: DataClient
) {

    private val logger = LoggerFactory.getLogger(javaClass)

    suspend fun getOrCreateConcept(concept: ConceptInitData) = ConceptGetByIdentifierQuery(concept.identifier)
        .invokeWith(dataClient.concept.conceptGetByIdentifier())
        .item
        ?.id
        ?: run {
            ConceptCreateCommand(
                identifier = concept.identifier,
                prefLabels = concept.prefLabels,
                definitions = concept.definitions.orEmpty(),
                schemes = concept.schemes.orEmpty().toSet(),
            ).invokeWith(dataClient.concept.conceptCreate()).id
        }

    suspend fun getOrCreateLicense(license: LicenseInitData) = LicenseGetByIdentifierQuery(license.identifier)
        .invokeWith(dataClient.license.licenseGetByIdentifier())
        .item
        ?.id
        ?: run {
            LicenseCreateCommand(
                identifier = license.identifier,
                name = license.name,
                url = license.url,
            ).invokeWith(dataClient.license.licenseCreate()).id
        }

    suspend fun getOrCreateDataset(
        identifier: DatasetIdentifier,
        language: Language,
        type: String,
        draftId: CatalogueDraftId
    ): DatasetId {
        val datasetId = DatasetGetByIdentifierQuery(identifier, language)
            .invokeWith(dataClient.dataset.datasetGetByIdentifier())
            .item
            ?.id
            ?: DatasetCreateCommandDTOBase(
                identifier = identifier,
                type = type,
                title = "",
                language = language,
                draftId = draftId
            ).invokeWith(dataClient.dataset.datasetCreate()).id

        return datasetId
    }

    suspend fun createDatasetMediaDistribution(
        datasetId: DatasetId,
        mediaType: String,
        file: SimpleFile,
        draftId: CatalogueDraftId
    ): DistributionId {
        return (DatasetAddMediaDistributionCommandDTOBase(
            id = datasetId,
            mediaType = mediaType,
            draftId = draftId
        ) to SimpleFile(
            name = file.name,
            content = file.content
        )).invokeWith(dataClient.dataset.datasetAddMediaDistribution()).distributionId
    }

    suspend fun getCatalogue(catalogueData: CatalogueImportData): CatalogueDTOBase? {
        try {
            return CatalogueGetByIdentifierQuery(catalogueData.identifier, null)
                .invokeWith(dataClient.catalogue.catalogueGetByIdentifier())
                .item
        } catch (e: F2Exception) {
            logger.error(e.error.message, e)
            return null
        }
    }
}
