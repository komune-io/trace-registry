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
        val originalId = catalogue.isTranslationOf
            ?: return null

        return catalogueRepository.findById(originalId)
            .orElse(null)
            ?.toModel()
            ?.translate(catalogue)
    }

    private suspend fun CatalogueModel.translate(catalogueTranslated: CatalogueEntity): CatalogueModel {
        return this.copy(
            id = catalogueTranslated.id,
            language = catalogueTranslated.language,
            title = catalogueTranslated.title,
            description = catalogueTranslated.description,
            childrenDatasetIds = this.childrenDatasetIds + catalogueTranslated.childrenDatasetIds,
            childrenCatalogueIds = this.childrenCatalogueIds + catalogueTranslated.childrenCatalogueIds,
            isTranslationOf = catalogueTranslated.isTranslationOf
        )
    }
}
