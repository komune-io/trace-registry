package io.komune.registry.f2.catalogue.api.service

import f2.dsl.cqrs.filter.CollectionMatch
import f2.dsl.cqrs.filter.ExactMatch
import f2.dsl.cqrs.filter.Match
import f2.dsl.cqrs.filter.StringMatch
import f2.dsl.cqrs.filter.StringMatchCondition
import f2.dsl.cqrs.page.OffsetPagination
import io.komune.registry.api.commons.utils.mapAsync
import io.komune.registry.f2.catalogue.api.config.CatalogueConfig
import io.komune.registry.f2.catalogue.domain.dto.CatalogueDTOBase
import io.komune.registry.f2.catalogue.domain.dto.CatalogueRefDTOBase
import io.komune.registry.f2.catalogue.domain.dto.CatalogueRefTreeDTOBase
import io.komune.registry.f2.catalogue.domain.query.CataloguePageResult
import io.komune.registry.f2.catalogue.domain.query.CatalogueRefListResult
import io.komune.registry.f2.catalogue.domain.query.CatalogueSearchResult
import io.komune.registry.f2.concept.api.service.ConceptF2FinderService
import io.komune.registry.f2.concept.domain.model.ConceptTranslatedDTOBase
import io.komune.registry.f2.license.api.service.LicenseF2FinderService
import io.komune.registry.program.s2.catalogue.api.CatalogueFinderService
import io.komune.registry.s2.catalogue.domain.automate.CatalogueId
import io.komune.registry.s2.catalogue.domain.automate.CatalogueIdentifier
import io.komune.registry.s2.catalogue.domain.automate.CatalogueState
import io.komune.registry.s2.catalogue.domain.model.CatalogueModel
import io.komune.registry.s2.catalogue.domain.model.FacetDistribution
import io.komune.registry.s2.catalogue.domain.model.FacetDistributionDTO
import io.komune.registry.s2.commons.model.Language
import org.springframework.stereotype.Service

@Service
class CatalogueF2FinderService(
    private val catalogueConfig: CatalogueConfig,
    private val catalogueFinderService: CatalogueFinderService,
    private val catalogueI18nService: CatalogueI18nService,
    private val conceptF2FinderService: ConceptF2FinderService,
    private val licenseF2FinderService: LicenseF2FinderService
) {

    suspend fun getOrNull(
        id: CatalogueId,
        language: Language?
    ): CatalogueDTOBase? {
        return catalogueFinderService.getOrNull(id)
            ?.let { catalogueI18nService.translateToDTO(it, language, false) }
    }

    suspend fun getByIdentifierOrNull(
        identifier: CatalogueIdentifier,
        language: Language?,
    ): CatalogueDTOBase? {
        return catalogueFinderService.getByIdentifierOrNull(identifier)
            ?.let { catalogueI18nService.translateToDTO(it, language, false) }
    }

    suspend fun getAllRefs(language: Language): CatalogueRefListResult {
        val items = catalogueFinderService.getAll().mapNotNull {
            catalogueI18nService.translateToRefDTO(it, language, false)
        }
        return CatalogueRefListResult(items = items, total = items.size)
    }

    suspend fun getRefTreeOrNull(id: CatalogueId, language: Language?): CatalogueRefTreeDTOBase? {
        return catalogueFinderService.getOrNull(id)
            ?.let { catalogueI18nService.translateToRefTreeDTO(it, language, false) }
    }

    suspend fun getRefTreeByIdentifierOrNull(identifier: CatalogueIdentifier, language: Language?): CatalogueRefTreeDTOBase? {
        return catalogueFinderService.getByIdentifierOrNull(identifier)
            ?.let { catalogueI18nService.translateToRefTreeDTO(it, language, false) }
    }

    suspend fun page(
        catalogueId: String?,
        parentIdentifier: String?,
        language: String,
        title: String?,
        type: Match<String>?,
        status: String?,
        hidden: Match<Boolean>? = null,
        offset: OffsetPagination? = null
    ): CataloguePageResult {
        val defaultValue = status?.let { CatalogueState.valueOf(it) } ?: CatalogueState.ACTIVE
        val catalogues = catalogueFinderService.page(
            id = catalogueId?.let { ExactMatch(it) },
            title = title?.let { StringMatch(it, StringMatchCondition.CONTAINS) },
            parentIdentifier = parentIdentifier,
            type = type,
            status = ExactMatch(defaultValue),
            hidden = hidden,
            offset = offset
        )

        return CataloguePageResult(
            items = catalogues.items.mapNotNull { catalogueI18nService.translateToDTO(it, language, false) },
            total = catalogues.total
        )
    }
    suspend fun search(
        language: Language,
        query: String?,

        accessRights: List<String>?,
        catalogueIds: List<String>?,
        parentIdentifier: List<String>?,
        type: List<String>?,
        themeIds: List<String>?,
        licenseId: List<String>?,

        page: OffsetPagination? = null
    ): CatalogueSearchResult {
        val catalogues = catalogueFinderService.search(
            query = query,
            catalogueIds = catalogueIds,

            accessRights = accessRights,
            language = language,
            licenseId = licenseId,
            parentIdentifier = parentIdentifier,
            type = type,
            themeIds = themeIds,
            page = page
        )

//        catalogues.distribution[CatalogueModel::accessRights.name]

        val themeDistribution = catalogues.distribution[CatalogueModel::themeIds.name]?.entries?.map{ (key, size) ->
            val theme = conceptF2FinderService.getTranslatedOrNull(key, language, true)
            FacetDistribution(
                id = theme?.id ?: key,
                name = theme?.prefLabel ?: "",
                size = size
            )
        } ?: emptyList<FacetDistributionDTO>()

        val licenceDistribution = catalogues.distribution[CatalogueModel::licenseId.name]?.entries?.map{ (key, size) ->
            val licence = licenseF2FinderService.getOrNull(key)
            FacetDistribution(
                id = licence?.id ?: key,
                name = licence?.name ?: "",
                size = size
            )
        } ?: emptyList<FacetDistributionDTO>()

        val cataloguesDistribution = catalogues.distribution[CatalogueModel::type.name]?.entries?.map { (key, size) ->
            val catalogue = getOrNull(key, language)
            FacetDistribution(
                id = catalogue?.id ?: key,
                name = catalogue?.title ?: "",
                size = size
            )
        } ?: emptyList<FacetDistributionDTO>()

        return CatalogueSearchResult(
            items = catalogues.items.mapNotNull { catalogueI18nService.translateToDTO(it, language, false) },
            total = catalogues.total,
            distribution = mapOf(
                CatalogueModel::type.name to cataloguesDistribution,
                CatalogueModel::licenseId.name to licenceDistribution,
                CatalogueModel::themeIds.name to themeDistribution,
            ),
        )
    }

    suspend fun listAvailableParentsFor(id: CatalogueId?, type: String, language: Language?): List<CatalogueRefDTOBase> {
        val allowedParentTypes = catalogueConfig.typeConfigurations[type]?.parentTypes
        val descendantsIds = id?.let { getRefTreeOrNull(it, language)?.descendantsIds() }

        return catalogueFinderService.page(
            type = allowedParentTypes?.let { CollectionMatch(it) },
            hidden = ExactMatch(false)
        ).items // CollectionMatch(...).not() doesn't work with Redis
            .filter { it.id != id && (descendantsIds == null || it.id !in descendantsIds) }
            .mapAsync { catalogueI18nService.translateToRefDTO(it, language, false) }
            .filterNotNull()
            .sortedBy(CatalogueRefDTOBase::title)
    }

    suspend fun listAvailableThemesFor(type: String, language: Language): List<ConceptTranslatedDTOBase> {
        return catalogueConfig.typeConfigurations[type]
            ?.conceptSchemes
            ?.flatMap { conceptScheme -> conceptF2FinderService.listByScheme(conceptScheme, language) }
            .orEmpty()
    }
}
