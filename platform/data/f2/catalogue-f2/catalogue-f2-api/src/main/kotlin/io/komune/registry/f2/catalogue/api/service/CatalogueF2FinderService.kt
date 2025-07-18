package io.komune.registry.f2.catalogue.api.service

import f2.dsl.cqrs.filter.CollectionMatch
import f2.dsl.cqrs.filter.ExactMatch
import f2.dsl.cqrs.filter.Match
import f2.dsl.cqrs.page.OffsetPagination
import io.komune.im.commons.auth.AuthenticationProvider
import io.komune.registry.api.commons.utils.mapAsync
import io.komune.registry.f2.catalogue.api.model.orEmpty
import io.komune.registry.f2.catalogue.api.model.toAccessData
import io.komune.registry.f2.catalogue.api.model.toBlueprintsDTO
import io.komune.registry.f2.catalogue.api.model.toDTO
import io.komune.registry.f2.catalogue.api.model.toTypeDTO
import io.komune.registry.f2.catalogue.domain.dto.CatalogueAccessData
import io.komune.registry.f2.catalogue.domain.dto.CatalogueBlueprintsDTOBase
import io.komune.registry.f2.catalogue.domain.dto.CatalogueDTOBase
import io.komune.registry.f2.catalogue.domain.dto.CatalogueOperation
import io.komune.registry.f2.catalogue.domain.dto.CatalogueRefDTOBase
import io.komune.registry.f2.catalogue.domain.dto.CatalogueRefTreeDTOBase
import io.komune.registry.f2.catalogue.domain.dto.CatalogueTypeDTOBase
import io.komune.registry.f2.catalogue.domain.dto.structure.CatalogueStructureDTOBase
import io.komune.registry.f2.catalogue.domain.query.CatalogueHistoryGetResult
import io.komune.registry.f2.catalogue.domain.query.CatalogueListAllowedTypesQuery
import io.komune.registry.f2.catalogue.domain.query.CataloguePageResult
import io.komune.registry.f2.concept.api.service.ConceptF2FinderService
import io.komune.registry.f2.concept.domain.model.ConceptTranslatedDTOBase
import io.komune.registry.f2.organization.domain.model.OrganizationRef
import io.komune.registry.s2.catalogue.api.CatalogueEventWithStateService
import io.komune.registry.s2.catalogue.api.config.CatalogueConfig
import io.komune.registry.s2.catalogue.api.config.CatalogueTypeConfiguration
import io.komune.registry.s2.catalogue.api.entity.descendantsIds
import io.komune.registry.s2.catalogue.domain.automate.CatalogueState
import io.komune.registry.s2.catalogue.domain.model.CatalogueModel
import io.komune.registry.s2.commons.exception.NotFoundException
import io.komune.registry.s2.commons.model.CatalogueId
import io.komune.registry.s2.commons.model.CatalogueIdentifier
import io.komune.registry.s2.commons.model.CatalogueType
import io.komune.registry.s2.commons.model.Criterion
import io.komune.registry.s2.commons.model.Language
import io.komune.registry.s2.commons.model.OrganizationId
import org.springframework.stereotype.Service

@Service
class CatalogueF2FinderService(
    private val catalogueConfig: CatalogueConfig,
    private val catalogueI18nService: CatalogueI18nService,
    private val cataloguePoliciesFilterEnforcer: CataloguePoliciesFilterEnforcer,
    private val conceptF2FinderService: ConceptF2FinderService,
    private val catalogueEventWithStateService: CatalogueEventWithStateService,
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

    suspend fun getRef(id: CatalogueId, language: Language): CatalogueRefDTOBase? {
        return catalogueFinderService.getOrNull(id)
            ?.let { cataloguePoliciesFilterEnforcer.enforceCatalogue(it) }
            ?.let { catalogue ->
                catalogue.takeIf { it.isTranslationOf == null }
                    ?: catalogueFinderService.getOrNull(catalogue.isTranslationOf!!)
                    ?: catalogue
            }?.let { catalogueI18nService.translateToRefDTO(it, language, false) }
    }

    suspend fun getRefTreeOrNull(id: CatalogueId, language: Language?): CatalogueRefTreeDTOBase? {
        return catalogueFinderService.getOrNull(id)
            ?.let { catalogueI18nService.translateToRefTreeDTO(it, language, false) }
    }

    suspend fun getRefTreeByIdentifierOrNull(identifier: CatalogueIdentifier, language: Language?): CatalogueRefTreeDTOBase? {
        return catalogueFinderService.getByIdentifierOrNull(identifier)
            ?.let { catalogueI18nService.translateToRefTreeDTO(it, language, false) }
    }
    suspend fun getHistory(id: CatalogueId): CatalogueHistoryGetResult {
        val actualVersion = catalogueFinderService.getOrNull(id)
        val history = catalogueEventWithStateService.getHistory(id)
        return CatalogueHistoryGetResult(
            actualVersion,
            history,
        )

    }

    suspend fun page(
        id: Match<String>? = null,
        parentId: Match<CatalogueId>? = null,
        parentIdentifier: Match<CatalogueIdentifier>? = null,
        language: String,
        otherLanguageIfAbsent: Boolean = false,
        title: Match<String>? = null,
        type: Match<String>? = null,
        relatedInCatalogueIds: Map<String, Match<CatalogueId>>? = null,
        creatorOrganizationId: Match<OrganizationId>? = null,
        status: String? = null,
        hidden: Match<Boolean>? = null,
        freeCriterion: Criterion? = null,
        offset: OffsetPagination? = null
    ): CataloguePageResult = withCache { cache ->
        val defaultValue = status?.let { CatalogueState.valueOf(it) } ?: CatalogueState.ACTIVE
        val catalogues = catalogueFinderService.page(
            id = id,
            title = title,
            parentId = parentId,
            parentIdentifier = parentIdentifier,
            type = type,
            relatedInCatalogueIds = relatedInCatalogueIds,
            creatorOrganizationId = creatorOrganizationId,
            status = ExactMatch(defaultValue),
            hidden = hidden,
            freeCriterion = freeCriterion,
            offset = offset
        )

        CataloguePageResult(
            items = catalogues.items
                .onEach { cache.untranslatedCatalogues.register(it.id, it) }
                .mapNotNull { catalogueI18nService.translateToDTO(it, language, otherLanguageIfAbsent) }
                .sortedBy { "${it.title}   ${it.identifier}" },
            total = catalogues.total
        )
    }

    suspend fun getStructure(type: CatalogueType, language: Language): CatalogueStructureDTOBase? = withCache { cache ->
        val blueprint = catalogueConfig.typeConfigurations[type]
        blueprint?.structure?.toDTO(
            language = language,
            defaults = blueprint.defaults,
            getTypeConfiguration = catalogueConfig.typeConfigurations::get,
            getLicenseByIdentifier = cache.licensesByIdentifier::get
        )
    }

    suspend fun getBlueprints(language: Language): CatalogueBlueprintsDTOBase? = withCache { cache ->
        catalogueConfig.typeConfigurations.toBlueprintsDTO(
            language = language,
            getLicenseByIdentifier = cache.licensesByIdentifier::get
        )
    }

    suspend fun listAvailableParentsFor(
        id: CatalogueId?,
        type: CatalogueType,
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
            .sortedBy { "${it.title}   ${it.identifier}" }
    }

    suspend fun listAvailableThemesFor(type: CatalogueType, language: Language): List<ConceptTranslatedDTOBase> {
        return catalogueConfig.typeConfigurations[type]
            ?.conceptSchemes
            ?.flatMap { conceptScheme -> conceptF2FinderService.listByScheme(conceptScheme, language) }
            .orEmpty()
    }

    suspend fun listAvailableOwnersFor(type: CatalogueType, search: String?, limit: Int?): List<OrganizationRef> {
        val roles = catalogueConfig.typeConfigurations[type]
            ?.ownerRoles
            ?.ifEmpty { return emptyList() }

        return organizationF2FinderService.page(
            name = search,
            roles = roles?.toList(),
            offset = limit?.let { OffsetPagination(0, it) }
        ).items
    }

    suspend fun listAllowedTypes(
        query: CatalogueListAllowedTypesQuery
    ): List<CatalogueTypeDTOBase> {
        return when (query.operation) {
            CatalogueOperation.ALL -> catalogueConfig.typeConfigurations.keys
            CatalogueOperation.CLAIM_OWNERSHIP -> listClaimableTypes()
            CatalogueOperation.RELATION -> listRelationAllowedType(query)
            CatalogueOperation.SEARCH -> listSearchAllowedTypes()
            CatalogueOperation.UPDATE -> listExplicitlyAllowedTypesToWrite()
        }.map { it.toDTO(query.language).orEmpty(it) }.sortedBy { it.name }
    }

    suspend fun listRelationAllowedType(query: CatalogueListAllowedTypesQuery): List<CatalogueType> {
        return catalogueConfig.typeConfigurations[query.catalogueType]
            ?.relatedTypes
            ?.get(query.relationType)
            .orEmpty()
            .toList()
    }

    suspend fun listSearchAllowedTypes(): Set<CatalogueType> {
        return catalogueConfig.searchableTypes - catalogueConfig.transientTypes
    }

    suspend fun listExplicitlyAllowedTypesToWrite() = listExplicitlyAllowedTypes { it.writerRoles }

    suspend fun listClaimableTypes() = listExplicitlyAllowedTypes { it.ownerRoles }

    private suspend fun listExplicitlyAllowedTypes(
        getAllowedRoles: (CatalogueTypeConfiguration) -> Set<String>?
    ): List<CatalogueType> {
        val authedUser = AuthenticationProvider.getAuthedUser()
            ?: return emptyList()

        val authedUserRoles = authedUser.roles.orEmpty().toSet()

        return catalogueConfig.typeConfigurations.values.filter { typeConfiguration ->
            getAllowedRoles(typeConfiguration)?.any { it in authedUserRoles } == true
        }.map { it.type }
    }

    private suspend fun CatalogueModel.toAccessDataCached() = withCache { cache ->
        toAccessData(
            getOrganization = cache.organizations::get,
            getUser = cache.users::get
        )
    }

    private fun CatalogueType.toDTO(language: Language): CatalogueTypeDTOBase? {
        return catalogueConfig.typeConfigurations[this]?.toTypeDTO(language)
    }
}
