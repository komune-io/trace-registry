package io.komune.registry.f2.catalogue.api.service

import f2.dsl.cqrs.filter.CollectionMatch
import f2.dsl.cqrs.filter.ExactMatch
import f2.dsl.cqrs.filter.Match
import f2.dsl.cqrs.page.OffsetPagination
import io.komune.registry.api.commons.utils.mapAsync
import io.komune.registry.f2.catalogue.api.config.CatalogueConfig
import io.komune.registry.f2.catalogue.api.model.toAccessData
import io.komune.registry.f2.catalogue.domain.dto.CatalogueAccessData
import io.komune.registry.f2.catalogue.domain.dto.CatalogueDTOBase
import io.komune.registry.f2.catalogue.domain.dto.CatalogueRefDTOBase
import io.komune.registry.f2.catalogue.domain.dto.CatalogueRefTreeDTOBase
import io.komune.registry.f2.catalogue.domain.query.CataloguePageResult
import io.komune.registry.f2.catalogue.domain.query.CatalogueRefListResult
import io.komune.registry.f2.catalogue.domain.query.CatalogueSearchResult
import io.komune.registry.f2.concept.api.service.ConceptF2FinderService
import io.komune.registry.f2.concept.domain.model.ConceptTranslatedDTOBase
import io.komune.registry.f2.organization.domain.model.OrganizationRef
import io.komune.registry.program.s2.catalogue.api.CatalogueFinderService
import io.komune.registry.program.s2.catalogue.api.entity.descendantsIds
import io.komune.registry.s2.catalogue.domain.automate.CatalogueState
import io.komune.registry.s2.catalogue.domain.model.CatalogueModel
import io.komune.registry.s2.catalogue.domain.model.FacetDistribution
import io.komune.registry.s2.catalogue.domain.model.FacetDistributionDTO
import io.komune.registry.s2.commons.exception.NotFoundException
import io.komune.registry.s2.commons.model.CatalogueId
import io.komune.registry.s2.commons.model.CatalogueIdentifier
import io.komune.registry.s2.commons.model.Criterion
import io.komune.registry.s2.commons.model.Language
import io.komune.registry.s2.commons.model.OrganizationId
import org.springframework.stereotype.Service

@Service
class CatalogueF2FinderService(
    private val catalogueConfig: CatalogueConfig,
    private val catalogueFinderService: CatalogueFinderService,
    private val catalogueI18nService: CatalogueI18nService,
    private val cataloguePoliciesFilterEnforcer: CataloguePoliciesFilterEnforcer,
    private val conceptF2FinderService: ConceptF2FinderService,
) : CatalogueCachedService() {

    suspend fun getOrNull(
        id: CatalogueId,
        language: Language?
    ): CatalogueDTOBase? {
        return catalogueFinderService.getOrNull(id)
            ?.let { catalogueI18nService.translateToDTO(it, language, false) }
    }

    suspend fun get(
        id: CatalogueId,
        language: Language?
    ): CatalogueDTOBase {
        return getOrNull(id, language)
            ?: throw NotFoundException("Catalogue", id)
    }

    suspend fun getAccessData(id: CatalogueId): CatalogueAccessData {
        return catalogueFinderService.get(id).toAccessDataCached()
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
        id: Match<String>? = null,
        parentIdentifier: String? = null,
        language: String,
        otherLanguageIfAbsent: Boolean = false,
        title: Match<String>? = null,
        type: Match<String>? = null,
        creatorOrganizationId: Match<OrganizationId>? = null,
        status: String? = null,
        hidden: Match<Boolean>? = null,
        freeCriterion: Criterion? = null,
        offset: OffsetPagination? = null
    ): CataloguePageResult = withCache {
        val defaultValue = status?.let { CatalogueState.valueOf(it) } ?: CatalogueState.ACTIVE
        val catalogues = catalogueFinderService.page(
            id = id,
            title = title,
            parentIdentifier = parentIdentifier,
            type = type,
            creatorOrganizationId = creatorOrganizationId,
            status = ExactMatch(defaultValue),
            hidden = hidden,
            freeCriterion = freeCriterion,
            offset = offset
        )

        CataloguePageResult(
            items = catalogues.items
                .mapNotNull { catalogueI18nService.translateToDTO(it, language, otherLanguageIfAbsent) }
                .sortedBy(CatalogueDTOBase::title),
            total = catalogues.total
        )
    }

    @Suppress("LongMethod")
    suspend fun search(
        language: Language,
        query: String?,
        accessRights: Match<String>? = null,
        catalogueIds: Match<String>? = null,
        parentIdentifier: Match<String>? = null,
        type: Match<String>? = null,
        themeIds: Match<String>? = null,
        licenseId: Match<String>? = null,
        creatorOrganizationId: Match<OrganizationId>? = null,
        availableLanguages: Match<Language>? = null,
        freeCriterion: Criterion? = null,
        page: OffsetPagination? = null
    ): CatalogueSearchResult = withCache { cache ->
        val catalogueTranslations = catalogueFinderService.search(
            query = query,
            catalogueIds = catalogueIds,
            accessRights = accessRights,
            language = ExactMatch(language),
            licenseId = licenseId,
            parentIdentifier = parentIdentifier,
            type = type,
            themeIds = themeIds,
            creatorOrganizationId = creatorOrganizationId,
            availableLanguages = availableLanguages,
            freeCriterion = freeCriterion,
            page = page
        )

        val accessRightsDistribution = catalogueTranslations.distribution[CatalogueModel::accessRights.name]?.entries?.map{ (key, size) ->
            FacetDistribution(
                id = key,
                name = key,
                size = size
            )
        } ?: emptyList<FacetDistributionDTO>()
        val themeDistribution = catalogueTranslations.distribution[CatalogueModel::themeIds.name]?.entries?.map{ (key, size) ->
            val theme = conceptF2FinderService.getTranslatedOrNull(key, language, true)
            FacetDistribution(
                id = theme?.id ?: key,
                name = theme?.prefLabel ?: "",
                size = size
            )
        } ?: emptyList<FacetDistributionDTO>()

        val licenceDistribution = catalogueTranslations.distribution[CatalogueModel::licenseId.name]?.entries?.map{ (key, size) ->
            val licence = cache.licenses.get(key)
            FacetDistribution(
                id = licence?.id ?: key,
                name = licence?.name ?: "",
                size = size
            )
        } ?: emptyList<FacetDistributionDTO>()

        val cataloguesDistribution = catalogueTranslations.distribution[CatalogueModel::type.name]?.entries?.map { (key, size) ->
            val catalogue = getOrNull("${key}s", language)
            FacetDistribution(
                id = key,
                name = catalogue?.title ?: "",
                size = size
            )
        } ?: emptyList<FacetDistributionDTO>()

        val translatedCatalogues = page(
            id = CollectionMatch(catalogueTranslations.items.map { it.id.substringBeforeLast('-') }),
            language = language
        ).items.associateBy { "${it.id}-$language" }

        CatalogueSearchResult(
            items = catalogueTranslations.items.mapNotNull { translatedCatalogues[it.id] },
            total = catalogueTranslations.total,
            distribution = mapOf(
                CatalogueModel::accessRights.name to accessRightsDistribution,
                CatalogueModel::type.name to cataloguesDistribution,
                CatalogueModel::licenseId.name to licenceDistribution,
                CatalogueModel::themeIds.name to themeDistribution,
            ),
        )
    }

    suspend fun listAvailableParentsFor(
        id: CatalogueId?,
        type: String,
        language: Language?,
        onlyAccessibleByAuthedUser: Boolean
    ): List<CatalogueRefDTOBase> {
        val allowedParentTypes = catalogueConfig.typeConfigurations[type]?.parentTypes
        val descendantsIds = id?.let { catalogueFinderService.getOrNull(it)?.descendantsIds(catalogueFinderService::get) }

        return catalogueFinderService.page(
            type = allowedParentTypes?.let { CollectionMatch(it) },
            hidden = ExactMatch(false),
            freeCriterion = cataloguePoliciesFilterEnforcer.enforceAccessFilter().takeIf { onlyAccessibleByAuthedUser }
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

    suspend fun listAvailableOwnersFor(type: String, search: String?, limit: Int?): List<OrganizationRef> {
        val roles = catalogueConfig.typeConfigurations[type]?.ownerRoles

        return organizationF2FinderService.page(
            name = search,
            roles = roles?.toList(),
            offset = limit?.let { OffsetPagination(0, it) }
        ).items
    }

    private suspend fun CatalogueModel.toAccessDataCached() = withCache { cache ->
        toAccessData(
            getOrganization = cache.organizations::get,
            getUser = cache.users::get
        )
    }
}
