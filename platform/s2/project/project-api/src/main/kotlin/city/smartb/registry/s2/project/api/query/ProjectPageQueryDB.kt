package city.smartb.registry.s2.project.api.query

import city.smartb.registry.infra.redis.PageQueryDB
import city.smartb.registry.infra.redis.criterion
import city.smartb.registry.infra.redis.match
import city.smartb.registry.s2.commons.model.Criterion
import city.smartb.registry.s2.commons.model.CriterionField
import city.smartb.registry.s2.project.api.entity.ProjectEntity
import city.smartb.registry.s2.project.api.entity.`ProjectEntity$`
import city.smartb.registry.s2.project.domain.automate.ProjectState
import city.smartb.registry.s2.project.domain.model.ProjectCriterionField
import city.smartb.registry.s2.project.domain.model.ProjectId
import city.smartb.registry.s2.project.domain.model.ProjectIdentifier
import com.redis.om.spring.metamodel.MetamodelField
import com.redis.om.spring.metamodel.SearchFieldAccessor
import com.redis.om.spring.metamodel.indexed.TextField
import com.redis.om.spring.metamodel.indexed.TextTagField
import com.redis.om.spring.search.stream.EntityStream
import f2.dsl.cqrs.filter.Match
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.cqrs.page.PageDTO
import org.springframework.stereotype.Repository

@Repository
class ProjectPageQueryDB(
    override val entityStream: EntityStream,
): PageQueryDB() {

    companion object {
        private val FIELD_PROPONENT_NAME = TextField<ProjectEntity, String>(
            SearchFieldAccessor("proponent_name", ProjectEntity::class.java.getDeclaredField("proponent")),
            true
        )
        private val FIELD_PROPONENT_ID = TextTagField<ProjectEntity, String>(
            SearchFieldAccessor("proponent_id", ProjectEntity::class.java.getDeclaredField("proponent")),
            true
        )
    }

    fun execute(
        id: Match<ProjectId>? = null,
        identifier: Match<ProjectIdentifier>? = null,
        name: Match<String>? = null,
        proponent: Match<String>? = null,
        type: Match<Int>? = null,
        origin: Match<String>? = null,
        estimatedReductions: Match<String>? = null,
        referenceYear: Match<String>? = null,
        dueDate: Match<Long>? = null,
        assetPools: Match<String>? = null,
        freeCriteria: Criterion? = null,
        status: Match<ProjectState>? = null,
        offset: OffsetPagination? = null,
    ): PageDTO<ProjectEntity> = doQuery(offset) {
        match(`ProjectEntity$`.ID, id)
        match(`ProjectEntity$`.IDENTIFIER, identifier)
        match(`ProjectEntity$`.NAME, name)
        match(`ProjectEntity$`.TYPE, type)
        match(`ProjectEntity$`.ESTIMATED_REDUCTION, estimatedReductions)
        match(`ProjectEntity$`.COUNTRY, origin)
//        match(`ProjectEntity$`.SUB_CONTINENT, origin)
        match(`ProjectEntity$`.REFERENCE_YEAR, referenceYear)
        match(`ProjectEntity$`.ASSET_POOLS, assetPools)
        match(`ProjectEntity$`.DUE_DATE, dueDate)
        match(`ProjectEntity$`.STATUS as TextField<ProjectEntity, ProjectState>, status)
        match(FIELD_PROPONENT_NAME, proponent)
        criterion(freeCriteria) { it.toRedisField() }
    }

    private fun <T> CriterionField<T>.toRedisField() = when (this) {
        is ProjectCriterionField<T> -> toRedisField()
        else -> TODO()
    }

    private fun <T> ProjectCriterionField<T>.toRedisField(): MetamodelField<ProjectEntity, T> = when (this) {
        ProjectCriterionField.Id -> `ProjectEntity$`.ID
        ProjectCriterionField.Name -> `ProjectEntity$`.NAME
        ProjectCriterionField.Private -> `ProjectEntity$`.PRIVACY
        ProjectCriterionField.ProponentId -> FIELD_PROPONENT_ID
    } as MetamodelField<ProjectEntity, T>
}
