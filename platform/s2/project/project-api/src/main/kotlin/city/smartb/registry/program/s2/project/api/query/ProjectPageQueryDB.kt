package city.smartb.registry.program.s2.project.api.query

import city.smartb.registry.program.infra.redis.PageQueryDB
import city.smartb.registry.program.infra.redis.match
import city.smartb.registry.program.s2.project.api.entity.ProjectEntity
import city.smartb.registry.program.s2.project.api.entity.`ProjectEntity$`
import city.smartb.registry.program.s2.project.domain.automate.ProjectState
import city.smartb.registry.program.s2.project.domain.model.ProjectId
import city.smartb.registry.program.s2.project.domain.model.ProjectIdentifier
import com.redis.om.spring.metamodel.SearchFieldAccessor
import com.redis.om.spring.metamodel.indexed.TextField
import com.redis.om.spring.search.stream.EntityStream
import f2.dsl.cqrs.filter.Match
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.cqrs.page.PageDTO
import java.util.function.Predicate
import org.springframework.stereotype.Repository

@Repository
class ProjectPageQueryDB(
    override val entityStream: EntityStream,
): PageQueryDB() {
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
        vintage: Match<String>? = null,
        status: Match<ProjectState>? = null,
        offset: OffsetPagination? = null,
        privateOrganizationId: String? = null,
    ): PageDTO<ProjectEntity> = doQuery(offset) {
        match(`ProjectEntity$`.ID, id)
        match(`ProjectEntity$`.IDENTIFIER, identifier)
        match(`ProjectEntity$`.NAME, name)
        match(`ProjectEntity$`.TYPE, type)
        match(`ProjectEntity$`.ESTIMATED_REDUCTION, estimatedReductions)
        match(`ProjectEntity$`.COUNTRY, origin)
//        match(`ProjectEntity$`.SUB_CONTINENT, origin)
        match(`ProjectEntity$`.REFERENCE_YEAR, referenceYear)
        match(`ProjectEntity$`.VINTAGE, vintage)
        match(`ProjectEntity$`.DUE_DATE, dueDate)
        match(`ProjectEntity$`.STATUS as TextField<ProjectEntity, ProjectState>, status)
        match(TextField(SearchFieldAccessor("proponent_name", ProjectEntity::class.java.getDeclaredField("proponent")), true), proponent)

        if (privateOrganizationId != null) {
            filter(Predicate<ProjectEntity> { project ->
                return@Predicate if (project.private) {
                    project.proponent?.id == privateOrganizationId
                } else false
            })
        }
    }
}
