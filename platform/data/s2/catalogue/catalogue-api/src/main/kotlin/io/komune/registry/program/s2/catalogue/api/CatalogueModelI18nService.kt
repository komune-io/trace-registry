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

    private suspend fun CatalogueModel.translate(catalogueTranslated: CatalogueEntity): CatalogueModel? {
        return this.copy(
            id = catalogueTranslated.id,
            language = catalogueTranslated.language,
            title = catalogueTranslated.title,
            description = catalogueTranslated.description,
            datasetIds = this.datasetIds + catalogueTranslated.datasetIds,
            catalogueIds = this.catalogueIds + catalogueTranslated.catalogueIds
        )
    }
}
