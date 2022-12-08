package city.smartb.registry.program.s2.project.api.query

import city.smartb.registry.program.api.commons.extention.toPage
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.cqrs.page.PageDTO
import city.smartb.registry.program.api.commons.model.Match
import city.smartb.registry.program.s2.project.api.entity.ProjectEntity
import city.smartb.registry.program.s2.project.api.entity.ProjectRepository
import city.smartb.registry.program.s2.project.domain.model.ProjectId
import f2.dsl.cqrs.page.Page
import org.springframework.data.domain.PageRequest
import org.springframework.stereotype.Repository

@Repository
class ProjectPageQueryDB(
    val repository: ProjectRepository
) {
    fun execute(
        id: Match<ProjectId>? = null,
        offset: OffsetPagination? = null
    ): PageDTO<ProjectEntity> {
        val page = offset.toPage()
        val items = repository.findAll(page)
        return Page(
            total = items.totalElements.toInt(),
            items =  items.toList()
        )
    }
}
