package io.komune.registry.f2.catalogue.api.service

import io.komune.registry.api.commons.utils.parseFileOrNull
import io.komune.registry.f2.catalogue.domain.command.CatalogueCreateCommandDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueCreatedEventDTOBase
import io.komune.registry.infra.postgresql.SequenceRepository
import io.komune.registry.program.s2.catalogue.api.CatalogueAggregateService
import io.komune.registry.program.s2.dataset.api.DatasetAggregateService
import io.komune.registry.s2.catalogue.domain.command.CatalogueLinkDatasetsCommand
import io.komune.registry.s2.dataset.domain.command.DatasetCreateCommand
import org.springframework.stereotype.Service

@Service
class CatalogueCreationService(
    private val catalogueAggregateService: CatalogueAggregateService,
    private val datasetAggregateService: DatasetAggregateService,
    private val sequenceRepository: SequenceRepository
) {

    companion object {
        const val TEMPLATE_DIR = "classpath:template"
        const val DEFAULT_SEQUENCE = "catalogue_seq"
    }

    suspend fun create(command: CatalogueCreateCommandDTOBase): CatalogueCreatedEventDTOBase {
        val template = parseFileOrNull<CatalogueTemplate>("$TEMPLATE_DIR/${command.type}.json")

        val catalogueIdentifier = command.identifier
            ?: "${command.type}-${sequenceRepository.nextValOf(template?.identifierSequence ?: DEFAULT_SEQUENCE)}"

        val catalogueCreatedEvent = catalogueAggregateService.create(command.toCommand(catalogueIdentifier)).toDTO()

        if (template == null) {
            return catalogueCreatedEvent
        }

        val datasetIds = template.datasets.map { dataset ->
            val identifier = "$catalogueIdentifier${dataset.identifierSuffix}"
            DatasetCreateCommand(
                identifier = identifier,
                title = identifier,
                type = dataset.type,
                language = command.language,
                format = null,
            ).let { datasetAggregateService.create(it).id }
        }

        CatalogueLinkDatasetsCommand(
            id = catalogueCreatedEvent.id,
            datasets = datasetIds
        ).let { catalogueAggregateService.linkDatasets(it) }

        return catalogueCreatedEvent
    }

    private data class CatalogueTemplate(
        val type: String,
        val identifierSequence: String?,
        val datasets: List<CatalogueTemplateSubDataset>
    )

    private data class CatalogueTemplateSubDataset(
        val type: String,
        val identifierSuffix: String
    )
}
