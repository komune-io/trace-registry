package city.smartb.registry.program.f2.project.domain.query

import city.smartb.registry.program.api.commons.auth.OrganizationId
import city.smartb.registry.program.api.commons.auth.UserId
import f2.dsl.cqrs.page.PageDTO
import f2.dsl.fnc.F2Function
import city.smartb.registry.program.f2.project.domain.model.ProjectDTO
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * TODO
 * @d2 function
 */
typealias ProjectPageFunction = F2Function<ProjectPageQuery, ProjectPageResult>

/**
 * @d2 query
 */
@JsExport
@JsName("ProjectPageQueryDTO")
interface ProjectPageQueryDTO {
    val friendlyId: String?
    val name: String?
    val beneficiaryId: OrganizationId?
    val supervisorId: UserId?
    val size: Int
    val page: Int
}

data class ProjectPageQuery(
    override val friendlyId: String?,
    override val name: String?,
    override val beneficiaryId: OrganizationId?,
    override val supervisorId: UserId?,
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

data class ProjectPageResult(
    override val items: List<ProjectDTO>,
    override val total: Int
): ProjectPageResultDTO
