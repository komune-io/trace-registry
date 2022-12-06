package city.smartb.registry.program.s2.project.api.query

import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.cqrs.page.PageDTO
import city.smartb.registry.program.api.commons.model.Match
import city.smartb.registry.program.s2.project.api.entity.project.ProjectEntity
import city.smartb.registry.program.s2.project.domain.model.ProjectId
import org.springframework.stereotype.Repository

@Repository
class ProjectPageQueryDB {
    fun execute(
        id: Match<ProjectId>? = null,
        offset: OffsetPagination? = null
    ): PageDTO<ProjectEntity> = TODO()
}
