package io.komune.registry.f2.dataset.api.service

import f2.dsl.cqrs.filter.CollectionMatch
import f2.dsl.cqrs.filter.ExactMatch
import f2.dsl.cqrs.filter.StringMatch
import f2.dsl.cqrs.filter.StringMatchCondition
import f2.dsl.cqrs.page.OffsetPagination
import io.komune.registry.api.commons.model.SimpleCache
import io.komune.registry.f2.dataset.api.model.toDTO
import io.komune.registry.f2.dataset.api.model.toSimpleRefDTO
import io.komune.registry.f2.dataset.domain.dto.DatasetDTOBase
import io.komune.registry.f2.dataset.domain.query.DatasetPageResult
import io.komune.registry.f2.dataset.domain.query.DatasetRefListResult
import io.komune.registry.program.s2.catalogue.api.CatalogueFinderService
import io.komune.registry.program.s2.dataset.api.DatasetFinderService
import io.komune.registry.s2.catalogue.domain.model.CatalogueAccessRight
import io.komune.registry.s2.cccev.api.CccevFinderService
import io.komune.registry.s2.commons.model.CatalogueIdentifier
import io.komune.registry.s2.commons.model.DatasetId
import io.komune.registry.s2.commons.model.DatasetIdentifier
import io.komune.registry.s2.dataset.domain.automate.DatasetState
import io.komune.registry.s2.dataset.domain.model.DatasetModel
import kotlinx.coroutines.async
import kotlinx.coroutines.awaitAll
import kotlinx.coroutines.coroutineScope
import org.springframework.stereotype.Service

@Service
class DatasetF2FinderService(
    private val cccevFinderService: CccevFinderService,
    private val datasetFinderService: DatasetFinderService,

    private val catalogueFinderService: CatalogueFinderService
) {

    suspend fun getOrNull(id: DatasetId): DatasetDTOBase? {
        return datasetFinderService.getOrNull(id)?.toDTOCached()
    }

    suspend fun get(id: DatasetId): DatasetDTOBase {
        return datasetFinderService.get(id).toDTOCached()
    }

    suspend fun getAllRefs(): DatasetRefListResult {
        val items = datasetFinderService.getAll().map { it.toSimpleRefDTO() }
        return DatasetRefListResult(items = items, total = items.size)
    }

    suspend fun getByIdentifier(
        identifier: DatasetIdentifier,
        language: String
    ): DatasetDTOBase? {
        return datasetFinderService.getOrNullByIdentifier(identifier, language)?.toDTOCached()
    }

    suspend fun page(
        datasetId: String?,
        title: String?,
        status: String?,
        offset: OffsetPagination? = null
    ): DatasetPageResult {
        val cache = Cache()

        val defaultValue = status?.let { DatasetState.valueOf(it) } ?: DatasetState.ACTIVE
        val datasets = datasetFinderService.page(
            id = datasetId?.let { ExactMatch(it) },
            title = title?.let { StringMatch(it, StringMatchCondition.CONTAINS) },
            status = ExactMatch(defaultValue),
            offset = offset
        )

        datasets.items.forEach { cache.datasets.register(it.id, it) }

        return DatasetPageResult(
            items = datasets.items.map { it.toDTOCached(cache) },
            total = datasets.total
        )
    }

    private suspend fun DatasetModel.toDTOCached(cache: Cache = Cache()) = toDTO(
        getDataset = cache.datasets::get,
        getDataUnit = cache.dataUnits::get,
        getInformationConcept = cache.informationConcepts::get,
        getSupportedValue = cache.supportedValues::get
    )

    private inner class Cache {
        val datasets = SimpleCache(datasetFinderService::get)
        val dataUnits = SimpleCache(cccevFinderService::getUnit)
        val informationConcepts = SimpleCache(cccevFinderService::getConcept)
        val supportedValues = SimpleCache(cccevFinderService::getValue)
    }

    suspend fun graphSearch(
        rootCatalogueIdentifier: CatalogueIdentifier,
        language: String,
        datasetType: String?
    ): List<DatasetDTOBase> = coroutineScope {
        val cache = Cache()
        val authedOrganizationId = io.komune.f2.spring.boot.auth.AuthenticationProvider.getOrganizationId()
        val visitedCatalogues = mutableSetOf<CatalogueIdentifier>()
        val visitedDatasets = mutableSetOf<DatasetIdentifier>()

        suspend fun traverseCatalogue(catalogueIdentifier: CatalogueIdentifier): List<DatasetDTOBase> {
            if (!visitedCatalogues.add(catalogueIdentifier)) {
                return emptyList() // already visited
            }

            val catalogue = catalogueFinderService.getByIdentifier(catalogueIdentifier)
                .takeIf {
                   (it.language == null || it.language == language ) &&
                           it.accessRights == CatalogueAccessRight.PUBLIC ||
                          (
                              it.accessRights == CatalogueAccessRight.PRIVATE &&
                                      it.ownerOrganizationId == authedOrganizationId
                          )

                }
            val datasetIds = catalogue?.childrenDatasetIds.orEmpty()
            val catalogueIds = catalogue?.childrenCatalogueIds.orEmpty()
            // Fetch datasets in parallel
            val datasetDeferred = datasetIds
                .filter { visitedDatasets.add(it) } // Avoid duplicates
                .let {
                    datasetFinderService.page(id = CollectionMatch(it)).items
                }.filter {
                    (datasetType == null || it.type == datasetType) && it.language == language
                }.map {
                    it.toDTOCached(cache)
                }


            // Traverse sub-catalogues in parallel
            val subCatalogueDeferred = catalogueIds.map { subId ->
                async { traverseCatalogue(subId) }
            }

            val datasets = datasetDeferred
            val subDatasets = subCatalogueDeferred.awaitAll().flatten()

            return (datasets + subDatasets)
        }

        traverseCatalogue(rootCatalogueIdentifier)
    }

}
