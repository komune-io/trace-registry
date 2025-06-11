package io.komune.registry.s2.catalogue.api.query

import com.redis.om.spring.metamodel.MetamodelField
import com.redis.om.spring.search.stream.EntityStream
import f2.dsl.cqrs.filter.Match
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.cqrs.page.PageDTO
import io.komune.registry.infra.redis.PageQueryDB
import io.komune.registry.infra.redis.criterion
import io.komune.registry.infra.redis.match
import io.komune.registry.s2.catalogue.api.entity.CatalogueEntity
import io.komune.registry.s2.catalogue.api.entity.`CatalogueEntity$`
import io.komune.registry.s2.catalogue.domain.automate.CatalogueState
import io.komune.registry.s2.catalogue.domain.model.CatalogueCriterionField
import io.komune.registry.s2.commons.model.CatalogueId
import io.komune.registry.s2.commons.model.CatalogueIdentifier
import io.komune.registry.s2.commons.model.Criterion
import io.komune.registry.s2.commons.model.CriterionField
import io.komune.registry.s2.commons.model.DatasetId
import io.komune.registry.s2.commons.model.OrganizationId
import org.springframework.stereotype.Repository

@Repository
class CataloguePageQueryDB(
    override val entityStream: EntityStream,
): PageQueryDB() {

    fun execute(
        id: Match<CatalogueId>? = null,
        identifier: Match<CatalogueIdentifier>? = null,
        title: Match<String>? = null,
        language: Match<String>? = null,
        type: Match<String>? = null,
        childrenCatalogueIds: Match<CatalogueId>? = null,
        childrenDatasetIds: Match<DatasetId>? = null,
        referencedDatasetIds: Match<DatasetId>? = null,
        creatorOrganizationId: Match<OrganizationId>? = null,
        status: Match<CatalogueState>? = null,
        hidden: Match<Boolean>? = null,
        freeCriterion: Criterion? = null,
        offset: OffsetPagination? = null,
    ): PageDTO<CatalogueEntity> = doQuery(offset) {
        match(`CatalogueEntity$`.ID, id)
        match(`CatalogueEntity$`.IDENTIFIER, identifier)
        match(`CatalogueEntity$`.TITLE, title)
        match(`CatalogueEntity$`.LANGUAGE, language)
        match(`CatalogueEntity$`.TYPE, type)
        match(`CatalogueEntity$`.CHILDREN_CATALOGUE_IDS, childrenCatalogueIds)
        match(`CatalogueEntity$`.CHILDREN_DATASET_IDS, childrenDatasetIds)
        match(`CatalogueEntity$`.REFERENCED_DATASET_IDS, referencedDatasetIds)
        match(`CatalogueEntity$`.CREATOR_ORGANIZATION_ID, creatorOrganizationId)
        match(`CatalogueEntity$`.HIDDEN, hidden)
        match(`CatalogueEntity$`.STATUS, status)
        criterion(freeCriterion) { it.toRedisField() }
    }

    private fun <T> CriterionField<T>.toRedisField(): MetamodelField<CatalogueEntity, T> {
        if (this !is CatalogueCriterionField) {
            throw IllegalArgumentException("Unsupported catalogue criterion field: $this")
        }
        return this.toRedisField()
    }

    private fun <T> CatalogueCriterionField<T>.toRedisField(): MetamodelField<CatalogueEntity, T> = when (this) {
        CatalogueCriterionField.Id -> `CatalogueEntity$`.ID
        CatalogueCriterionField.Type -> `CatalogueEntity$`.TYPE
        CatalogueCriterionField.AccessRights -> `CatalogueEntity$`.ACCESS_RIGHTS
        CatalogueCriterionField.IsTranslationOf -> `CatalogueEntity$`.IS_TRANSLATION_OF
        CatalogueCriterionField.CreatorId -> `CatalogueEntity$`.CREATOR_ID
        CatalogueCriterionField.CreatorOrganizationId -> `CatalogueEntity$`.CREATOR_ORGANIZATION_ID
        CatalogueCriterionField.OwnerOrganizationId -> `CatalogueEntity$`.OWNER_ORGANIZATION_ID
        CatalogueCriterionField.Hidden -> `CatalogueEntity$`.HIDDEN
    } as MetamodelField<CatalogueEntity, T>
}
