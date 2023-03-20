package city.smartb.registry.program.s2.project.api.query

import city.smartb.registry.program.api.commons.model.Match
import city.smartb.registry.program.infra.redis.PageQueryDB
import city.smartb.registry.program.infra.redis.match
import city.smartb.registry.program.s2.project.api.entity.ProjectEntity
import city.smartb.registry.program.s2.project.api.entity.`ProjectEntity$`
import city.smartb.registry.program.s2.project.domain.model.ProjectId
import com.redis.om.spring.search.stream.EntityStream
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.cqrs.page.PageDTO
import org.springframework.stereotype.Repository

@Repository
class ProjectPageQueryDB(
    override val entityStream: EntityStream
): PageQueryDB() {
    fun execute(
        id: Match<ProjectId>? = null,
        name: Match<String>? = null,
        offset: OffsetPagination? = null
    ): PageDTO<ProjectEntity> = doQuery(offset) {
        match(`ProjectEntity$`.ID, id)
        match(`ProjectEntity$`.NAME, name)
    }
}
