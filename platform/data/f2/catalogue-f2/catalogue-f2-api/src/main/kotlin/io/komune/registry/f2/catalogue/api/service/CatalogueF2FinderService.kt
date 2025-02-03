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
import io.komune.registry.program.s2.catalogue.api.CatalogueFinderService
import io.komune.registry.s2.catalogue.domain.automate.CatalogueId
import io.komune.registry.s2.catalogue.domain.automate.CatalogueIdentifier
import io.komune.registry.s2.catalogue.domain.automate.CatalogueState
import io.komune.registry.s2.commons.model.Language
import org.springframework.stereotype.Service

@Service
class CatalogueF2FinderService(
    private val catalogueConfig: CatalogueConfig,
    private val catalogueFinderService: CatalogueFinderService,
    private val catalogueI18nService: CatalogueI18nService
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
            catalogueI18nService.translateToRefDTO(it, language, true)
        }
        return CatalogueRefListResult(items = items, total = items.size)
    }

    suspend fun getRefTreeOrNull(id: CatalogueId, language: Language?): CatalogueRefTreeDTOBase? {
        return catalogueFinderService.getOrNull(id)
            ?.let { catalogueI18nService.translateToRefTreeDTO(it, language, true) }
    }

    suspend fun getRefTreeByIdentifierOrNull(identifier: CatalogueIdentifier, language: Language?): CatalogueRefTreeDTOBase? {
        return catalogueFinderService.getByIdentifierOrNull(identifier)
            ?.let { catalogueI18nService.translateToRefTreeDTO(it, language, true) }
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
            items = catalogues.items.mapNotNull { catalogueI18nService.translateToDTO(it, language, true) },
            total = catalogues.total
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
            .mapAsync { catalogueI18nService.translateToRefDTO(it, language, true) }
            .filterNotNull()
            .sortedBy(CatalogueRefDTOBase::title)
    }

    private fun CatalogueRefTreeDTOBase.descendantsIds(): Set<CatalogueId> = buildSet {
        catalogues?.forEach {
            add(it.id)
            addAll(it.descendantsIds())
        }
    }
}
