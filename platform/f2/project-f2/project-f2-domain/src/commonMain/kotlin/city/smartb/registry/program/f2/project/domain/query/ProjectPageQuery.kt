package city.smartb.registry.program.f2.project.domain.query

import city.smartb.registry.program.s2.project.domain.model.ProjectDTO
import f2.dsl.cqrs.page.PageDTO
import f2.dsl.fnc.F2Function
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * Get page of project
 *
 * @d2 function
 * @parent [city.smartb.registry.program.s2.project.domain.D2ApiSectionModel]
 * @child [ProjectPageQueryDTO]
 * @child [ProjectPageResultDTO]
 */
typealias ProjectPageFunction = F2Function<ProjectPageQuery, ProjectPageResult>

/**
 * @d2 query
 */
@JsExport
@JsName("ProjectPageQueryDTO")
interface ProjectPageQueryDTO {
    val name: String?
    val size: Int
    val page: Int
}

/**
 * @d2 inherit
 */
data class ProjectPageQuery(
    override val name: String?,
    override val size: Int,
    override val page: Int,
): ProjectPageQueryDTO

/**
 * Result of the query to get a page of projects.
 * @d2 event
 */
@JsExport
@JsName("ProjectPageResultDTO")
interface ProjectPageResultDTO: PageDTO<ProjectDTO>

/**
 * @d2 inherit
 */
data class ProjectPageResult(
    override val items: List<ProjectDTO>,
    override val total: Int
): ProjectPageResultDTO
