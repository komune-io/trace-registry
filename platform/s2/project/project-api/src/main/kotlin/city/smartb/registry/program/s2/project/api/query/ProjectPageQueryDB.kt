package city.smartb.registry.program.s2.project.api.query

import f2.dsl.cqrs.filter.Match
import city.smartb.registry.program.infra.redis.PageQueryDB
import city.smartb.registry.program.infra.redis.match
import city.smartb.registry.program.s2.project.api.entity.ProjectEntity
import city.smartb.registry.program.s2.project.api.entity.`ProjectEntity$`
import city.smartb.registry.program.s2.project.domain.automate.ProjectState
import city.smartb.registry.program.s2.project.domain.model.ProjectId
import com.redis.om.spring.metamodel.MetamodelField
import com.redis.om.spring.metamodel.indexed.TextField
import com.redis.om.spring.search.stream.EntityStream
import com.redis.om.spring.search.stream.SearchStream
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.cqrs.page.PageDTO
import org.springframework.stereotype.Repository

@Repository
class ProjectPageQueryDB(
    override val entityStream: EntityStream,
): PageQueryDB() {
    fun execute(
        id: Match<ProjectId>? = null,
        name: Match<String>? = null,
        proponent: Match<String>? = null,
        type: Match<String>? = null,
        estimatedReductions: Match<String>? = null,
        referenceYear: Match<String>? = null,
        dueDate: Match<Long>? = null,
        status: Match<ProjectState>? = null,
        offset: OffsetPagination? = null,
    ): PageDTO<ProjectEntity> = doQuery(offset) {
        match(`ProjectEntity$`.ID, id)
        match(`ProjectEntity$`.NAME, name)
        match(`ProjectEntity$`.PROPONENT, proponent)
        match(`ProjectEntity$`.TYPE, type)
        match(`ProjectEntity$`.ESTIMATED_REDUCTION, estimatedReductions)
        match(`ProjectEntity$`.REFERENCE_YEAR, referenceYear)
        match(`ProjectEntity$`.DUE_DATE, dueDate)
        match(`ProjectEntity$`.STATUS, status)
    }
}

private fun <E> SearchStream<E>.match(field: TextField<ProjectEntity, ProjectState>?, matcher: Match<ProjectState>?): SearchStream<E> {
    return match(field as MetamodelField<E, ProjectState>, matcher)
        ?.let(::filter)
        ?: this
}
