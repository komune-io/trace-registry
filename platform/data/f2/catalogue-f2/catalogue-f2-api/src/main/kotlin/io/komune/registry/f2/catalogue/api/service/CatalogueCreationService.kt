package io.komune.registry.f2.catalogue.api.service

import io.komune.registry.api.commons.utils.parseFileOrNull
import io.komune.registry.f2.catalogue.domain.command.CatalogueCreateCommandDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueCreatedEventDTOBase
import io.komune.registry.program.s2.catalogue.api.CatalogueAggregateService
import io.komune.registry.program.s2.dataset.api.DatasetAggregateService
import io.komune.registry.s2.catalogue.domain.command.CatalogueLinkDatasetsCommand
import io.komune.registry.s2.dataset.domain.command.DatasetCreateCommand
import org.springframework.stereotype.Service

@Service
class CatalogueCreationService(
    private val catalogueAggregateService: CatalogueAggregateService,
    private val datasetAggregateService: DatasetAggregateService
) {

    companion object {
        const val TEMPLATE_DIR = "classpath:template"
    }

    suspend fun create(command: CatalogueCreateCommandDTOBase): CatalogueCreatedEventDTOBase {
        val template = parseFileOrNull<CatalogueTemplate>("$TEMPLATE_DIR/${command.type}.json")
            ?: return catalogueAggregateService.create(command.toCommand()).toDTO()

        val datasetIds = template.datasets.map { dataset ->
            val identifier = "${command.identifier}${dataset.identifierSuffix}"
            DatasetCreateCommand(
                identifier = identifier,
                title = identifier,
                type = dataset.type,
                language = command.language,
                format = null,
            ).let { datasetAggregateService.create(it).id }
        }

        val event = catalogueAggregateService.create(command.toCommand())

        CatalogueLinkDatasetsCommand(
            id = event.id,
            datasets = datasetIds
        ).let { catalogueAggregateService.linkDatasets(it) }

        return event.toDTO()
    }

    private data class CatalogueTemplate(
        val type: String,
        val datasets: List<CatalogueTemplateSubDataset>
    )

    private data class CatalogueTemplateSubDataset(
        val type: String,
        val identifierSuffix: String
    )
}
