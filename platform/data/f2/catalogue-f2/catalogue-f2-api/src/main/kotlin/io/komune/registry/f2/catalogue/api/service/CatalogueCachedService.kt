package io.komune.registry.f2.catalogue.api.service

import io.komune.registry.f2.catalogue.api.model.CatalogueCacheContext
import io.komune.registry.f2.dataset.api.model.toDTO
import io.komune.registry.f2.license.api.service.LicenseF2FinderService
import io.komune.registry.f2.organization.api.service.OrganizationF2FinderService
import io.komune.registry.f2.user.api.service.UserF2FinderService
import io.komune.registry.program.s2.dataset.api.DatasetFinderService
import io.komune.registry.s2.catalogue.api.CatalogueFinderService
import io.komune.registry.s2.catalogue.draft.domain.model.CatalogueDraftModel
import io.komune.registry.s2.cccev.api.CccevFinderService
import io.komune.registry.s2.concept.api.ConceptFinderService
import io.komune.registry.s2.dataset.domain.model.DatasetModel
import kotlinx.coroutines.withContext
import org.springframework.beans.factory.annotation.Autowired
import kotlin.coroutines.coroutineContext

open class CatalogueCachedService {

    @Autowired
    protected lateinit var catalogueFinderService: CatalogueFinderService

    @Autowired
    protected lateinit var cccevFinderService: CccevFinderService

    @Autowired
    protected lateinit var conceptFinderService: ConceptFinderService

    @Autowired
    protected lateinit var datasetFinderService: DatasetFinderService

    @Autowired
    protected lateinit var licenseF2FinderService: LicenseF2FinderService

    @Autowired
    protected lateinit var organizationF2FinderService: OrganizationF2FinderService

    @Autowired
    protected lateinit var userF2FinderService: UserF2FinderService

    internal suspend fun <R> withCache(block: suspend (CatalogueCacheContext) -> R): R {
        val cache = coroutineContext[CatalogueCacheContext.Key]

        if (cache == null) {
            val cacheContext = CatalogueCacheContext(
                catalogueFinderService = catalogueFinderService,
                cccevFinderService = cccevFinderService,
                conceptFinderService = conceptFinderService,
                datasetFinderService = datasetFinderService,
                licenseF2FinderService = licenseF2FinderService,
                organizationF2FinderService = organizationF2FinderService,
                userF2FinderService = userF2FinderService
            )
            return withContext(cacheContext) {
                withCache(block)
            }
        }

        return block(cache)
    }


    protected suspend fun DatasetModel.toDTOCached(draft: CatalogueDraftModel?) = withCache { cache ->
        toDTO(
            getDataset = cache.datasets::get,
            getDataUnit = cache.dataUnits::get,
            getInformationConcept = cache.informationConcepts::get,
            getReferencingCatalogues = { datasetId ->
                val originalDatasetId = draft?.datasetIdMap?.entries
                    ?.firstOrNull { it.value == datasetId }
                    ?.key
                    ?: datasetId

                val referencingCatalogueIds = cache.cataloguesReferencingDatasets
                    .get(originalDatasetId)
                    .toMutableSet()

                draft?.removedExternalReferencesToDatasets?.forEach { (catalogueId, referencedDatasetIds) ->
                    if (datasetId in referencedDatasetIds) {
                        referencingCatalogueIds.remove(catalogueId)
                    }
                }

                draft?.addedExternalReferencesToDatasets?.forEach { (catalogueId, referencedDatasetIds) ->
                    if (datasetId in referencedDatasetIds) {
                        referencingCatalogueIds.add(catalogueId)
                    }
                }

                referencingCatalogueIds.toList()
            },
            getSupportedValue = cache.supportedValues::get,
            getTheme = cache.themes::get
        )
    }
}
