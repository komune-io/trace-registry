package io.komune.registry.f2.catalogue.api.model

import f2.dsl.cqrs.filter.ExactMatch
import io.komune.registry.api.commons.model.SimpleCache
import io.komune.registry.f2.license.api.service.LicenseF2FinderService
import io.komune.registry.f2.license.domain.model.LicenseDTOBase
import io.komune.registry.f2.organization.api.service.OrganizationF2FinderService
import io.komune.registry.f2.user.api.service.UserF2FinderService
import io.komune.registry.program.s2.dataset.api.DatasetFinderService
import io.komune.registry.s2.catalogue.api.CatalogueFinderService
import io.komune.registry.s2.cccev.api.CccevOldFinderService
import io.komune.registry.s2.commons.model.CatalogueId
import io.komune.registry.s2.commons.model.DatasetId
import io.komune.registry.s2.concept.api.ConceptFinderService
import io.komune.registry.s2.license.domain.LicenseId
import io.komune.registry.s2.license.domain.LicenseIdentifier
import kotlin.coroutines.CoroutineContext

internal class CatalogueCacheContext(
    private val catalogueFinderService: CatalogueFinderService,
    private val cccevOldFinderService: CccevOldFinderService,
    private val conceptFinderService: ConceptFinderService,
    private val licenseF2FinderService: LicenseF2FinderService,
    private val datasetFinderService: DatasetFinderService,
    private val organizationF2FinderService: OrganizationF2FinderService,
    private val userF2FinderService: UserF2FinderService
) : CoroutineContext.Element {
    override val key: CoroutineContext.Key<CatalogueCacheContext> = Key
    companion object Key : CoroutineContext.Key<CatalogueCacheContext>

    val untranslatedCatalogues = SimpleCache(catalogueFinderService::getOrNull)
    val datasets = SimpleCache(datasetFinderService::get)
    val cataloguesReferencingDatasets = SimpleCache<DatasetId, List<CatalogueId>> { datasetId ->
        catalogueFinderService.page(
            referencedDatasetIds = ExactMatch(datasetId),
        ).items
            .onEach { catalogue -> untranslatedCatalogues.register(catalogue.id, catalogue) }
            .map { it.isTranslationOf ?: it.id }.distinct()
    }

    val dataUnits = SimpleCache(cccevOldFinderService::getUnit)
    val informationConcepts = SimpleCache(cccevOldFinderService::getConceptOrNull)
    val supportedValues = SimpleCache(cccevOldFinderService::getValue)

    val themes = SimpleCache(conceptFinderService::get)

    val licenses: SimpleCache<LicenseId, LicenseDTOBase?> = SimpleCache { licenseId ->
        licenseF2FinderService.getOrNull(licenseId)
            ?.also { licensesByIdentifier.register(it.identifier, it) }
    }
    val licensesByIdentifier = SimpleCache<LicenseIdentifier, LicenseDTOBase?> { licenseIdentifier ->
        licenseF2FinderService.getByIdentifierOrNull(licenseIdentifier)
            ?.also { licenses.register(it.id, it) }
    }

    val organizations = SimpleCache(organizationF2FinderService::getRef)
    val users = SimpleCache(userF2FinderService::getRef)
}
