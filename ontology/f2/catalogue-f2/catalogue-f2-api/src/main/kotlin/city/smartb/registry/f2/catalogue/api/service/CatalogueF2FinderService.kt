package city.smartb.registry.f2.catalogue.api.service

import city.smartb.registry.f2.catalogue.domain.dto.CatalogueDTOBase
import city.smartb.registry.f2.catalogue.domain.dto.CatalogueRefDTOBase
import city.smartb.registry.f2.catalogue.domain.query.CatalogueGetResult
import city.smartb.registry.f2.catalogue.domain.query.CataloguePageResult
import city.smartb.registry.program.s2.catalogue.api.CatalogueFinderService
import city.smartb.registry.s2.catalogue.domain.automate.CatalogueIdentifier
import city.smartb.registry.s2.catalogue.domain.automate.CatalogueState
import city.smartb.registry.s2.catalogue.domain.model.CatalogueModel
import f2.dsl.cqrs.filter.ExactMatch
import f2.dsl.cqrs.filter.StringMatch
import f2.dsl.cqrs.filter.StringMatchCondition
import f2.dsl.cqrs.page.OffsetPagination
import org.springframework.stereotype.Service

@Service
class CatalogueF2FinderService(
    private val catalogueFinderService: CatalogueFinderService,
) {

    suspend fun getById(
        id: CatalogueIdentifier,
    ): CatalogueGetResult {
        val item = catalogueFinderService.getOrNull(id)
        return CatalogueGetResult(item?.toDTO())
    }
    suspend fun getByIdentifier(
        identifier: CatalogueIdentifier,
    ): CatalogueGetResult? {
        val item = catalogueFinderService.getOrNullByIdentifier(identifier)
        return CatalogueGetResult(item?.toDTO())
    }

    suspend fun page(
        catalogueId: String?,
        parentIdentifier: String?,
        title: String?,
        status: String?,
        offset: OffsetPagination? = null
    ): CataloguePageResult {
        val defaultValue = status?.let { CatalogueState.valueOf(it) } ?: CatalogueState.ACTIVE
        val catalogues = catalogueFinderService.page(
            id = catalogueId?.let { ExactMatch(it) },
            title = title?.let { StringMatch(it, StringMatchCondition.CONTAINS) },
            parentIdentifier = title?.let { StringMatch(it, StringMatchCondition.EXACT) },
            status = ExactMatch(defaultValue),
            offset = offset
        )
        return CataloguePageResult(
            items = catalogues.items.toDTO(),
            total = catalogues.total
        )
    }

    suspend fun List<CatalogueModel>.toDTO() = map {
        it.toDTO()
    }
    suspend fun CatalogueModel.toDTO(): CatalogueDTOBase {
        val cataloguesFetched = catalogues?.mapNotNull {
            catalogueFinderService.getOrNull(it)?.toRefDTO()
        }
        return CatalogueDTOBase(
            id = id,
            identifier = identifier,
            status = status,
            title = title,
            description = description,
            catalogues = cataloguesFetched,
            themes = themes,
            type = type,
            display = display,
            homepage = homepage,
            img = img
        )
    }
    suspend fun CatalogueModel.toRefDTO(): CatalogueRefDTOBase {
        return CatalogueRefDTOBase(
            id = id,
            identifier = identifier,
            status = status,
            title = title,
            description = description,
            themes = themes,
            type = type,
            display = display,
            homepage = homepage,
            img = img
        )
    }

}
