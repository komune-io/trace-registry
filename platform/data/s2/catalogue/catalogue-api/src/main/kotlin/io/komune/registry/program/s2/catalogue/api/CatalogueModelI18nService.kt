package io.komune.registry.program.s2.catalogue.api

import io.komune.registry.program.s2.catalogue.api.entity.CatalogueEntity
import io.komune.registry.program.s2.catalogue.api.entity.CatalogueRepository
import io.komune.registry.program.s2.catalogue.api.entity.toModel
import io.komune.registry.s2.catalogue.domain.model.CatalogueModel
import org.springframework.stereotype.Service

@Service
class CatalogueModelI18nService(
    private val catalogueRepository: CatalogueRepository,
) {

    suspend fun rebuildModel(catalogue: CatalogueEntity): CatalogueModel? {
        if (!catalogue.type.contains("translation")) {
            return null
        }

        val genId = catalogue.identifier.substringBeforeLast('-')
        val catalogueBase = catalogueRepository.findByIdentifier(genId)?.toModel()
        return catalogueBase?.translate(catalogue)
    }

    private suspend fun CatalogueModel.translate(catalogueTranlated: CatalogueEntity): CatalogueModel? {
        return this.copy(
            id = catalogueTranlated.id,
            language = catalogueTranlated.language,
            title = catalogueTranlated.title,
            description = catalogueTranlated.description,
            datasetIds = this.datasetIds + catalogueTranlated.datasetIds,
            catalogueIds = this.catalogueIds + catalogueTranlated.catalogueIds
        )
    }
}
