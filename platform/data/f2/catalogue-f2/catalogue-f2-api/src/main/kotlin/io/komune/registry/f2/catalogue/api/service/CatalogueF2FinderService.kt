package io.komune.registry.f2.catalogue.api.service

import f2.dsl.cqrs.filter.CollectionMatch
import f2.dsl.cqrs.filter.ExactMatch
import f2.dsl.cqrs.filter.Match
import f2.dsl.cqrs.page.OffsetPagination
import io.komune.im.commons.auth.AuthenticationProvider
import io.komune.registry.api.commons.utils.mapAsync
import io.komune.registry.f2.catalogue.api.config.CatalogueConfig
import io.komune.registry.f2.catalogue.api.model.toAccessData
import io.komune.registry.f2.catalogue.api.model.toDTO
import io.komune.registry.f2.catalogue.domain.dto.CatalogueAccessData
import io.komune.registry.f2.catalogue.domain.dto.CatalogueDTOBase
import io.komune.registry.f2.catalogue.domain.dto.CatalogueRefDTOBase
import io.komune.registry.f2.catalogue.domain.dto.CatalogueRefTreeDTOBase
import io.komune.registry.f2.catalogue.domain.dto.structure.CatalogueStructureDTOBase
import io.komune.registry.f2.catalogue.domain.query.CataloguePageResult
import io.komune.registry.f2.concept.api.service.ConceptF2FinderService
import io.komune.registry.f2.concept.domain.model.ConceptTranslatedDTOBase
import io.komune.registry.f2.organization.domain.model.OrganizationRef
import io.komune.registry.program.s2.catalogue.api.entity.descendantsIds
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
                .sortedBy { "${it.title}   ${it.identifier}" },
            total = catalogues.total
        )
    }

    suspend fun getStructure(type: CatalogueType, language: Language?): CatalogueStructureDTOBase? {
        return catalogueConfig.typeConfigurations[type]
            ?.structure
            ?.toDTO(language!!, catalogueConfig.typeConfigurations::get)
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
        val roles = catalogueConfig.typeConfigurations[type]?.ownerRoles

        return organizationF2FinderService.page(
            name = search,
            roles = roles?.toList(),
            offset = limit?.let { OffsetPagination(0, it) }
        ).items
    }

    suspend fun listExplicitlyAllowedTypesToWrite(): List<String> {
        val authedUser = AuthenticationProvider.getAuthedUser()
            ?: return emptyList()

        val authedUserRoles = authedUser.roles.orEmpty().toSet()

        return catalogueConfig.typeConfigurations.values.filter { typeConfiguration ->
            typeConfiguration.writerRoles.orEmpty().any { it in authedUserRoles }
        }.map { it.type }
    }

    private suspend fun CatalogueModel.toAccessDataCached() = withCache { cache ->
        toAccessData(
            getOrganization = cache.organizations::get,
            getUser = cache.users::get
        )
    }
}
