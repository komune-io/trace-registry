package city.smartb.registry.program.s2.project.api.query

import city.smartb.registry.program.infra.redis.PageQueryDB
import city.smartb.registry.program.infra.redis.match
import city.smartb.registry.program.s2.project.api.entity.ProjectEntity
import city.smartb.registry.program.s2.project.api.entity.`ProjectEntity$`
import city.smartb.registry.program.s2.project.domain.automate.ProjectState
import city.smartb.registry.program.s2.project.domain.model.ProjectId
import com.redis.om.spring.metamodel.MetamodelField
import com.redis.om.spring.metamodel.SearchFieldAccessor
import com.redis.om.spring.metamodel.indexed.TextField
import com.redis.om.spring.search.stream.EntityStream
import com.redis.om.spring.search.stream.SearchStream
import f2.dsl.cqrs.filter.Match
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.cqrs.page.PageDTO
import org.springframework.stereotype.Repository

@Repository
class ProjectPageQueryDB(
    override val entityStream: EntityStream,
): PageQueryDB() {
    fun execute(
        identifier: Match<ProjectId>? = null,
        name: Match<String>? = null,
        proponent: Match<String>? = null,
        type: Match<Int>? = null,
        origin: Match<String>? = null,
        estimatedReductions: Match<String>? = null,
        referenceYear: Match<String>? = null,
        dueDate: Match<Long>? = null,
        vintage: Match<String>? = null,
        status: Match<ProjectState>? = null,
        offset: OffsetPagination? = null,
    ): PageDTO<ProjectEntity> = doQuery(offset) {
        match(`ProjectEntity$`.IDENTIFIER, identifier)
        match(`ProjectEntity$`.NAME, name)
        match(`ProjectEntity$`.TYPE, type)
        match(`ProjectEntity$`.ESTIMATED_REDUCTION, estimatedReductions)
        match(`ProjectEntity$`.COUNTRY, origin)
//        match(`ProjectEntity$`.SUB_CONTINENT, origin)
        match(`ProjectEntity$`.REFERENCE_YEAR, referenceYear)
        match(`ProjectEntity$`.VINTAGE, vintage)
        match(`ProjectEntity$`.DUE_DATE, dueDate)
        match(`ProjectEntity$`.STATUS, status)
        match(TextField(SearchFieldAccessor("proponent_name", ProjectEntity::class.java.getDeclaredField("proponent")), true), proponent)
    }
}

private fun <E> SearchStream<E>.match(field: TextField<ProjectEntity, ProjectState>?, matcher: Match<ProjectState>?): SearchStream<E> {
    return match(field as MetamodelField<E, ProjectState>, matcher)
        ?.let(::filter)
        ?: this
}
