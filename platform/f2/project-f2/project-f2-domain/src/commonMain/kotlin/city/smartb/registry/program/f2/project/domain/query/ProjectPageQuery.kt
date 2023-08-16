package city.smartb.registry.program.f2.project.domain.query

import city.smartb.registry.program.s2.project.domain.model.ProjectDTO
import f2.dsl.cqrs.page.OffsetPaginationDTO
import f2.dsl.cqrs.page.PageQueryResultDTO
import f2.dsl.fnc.F2Function
import kotlin.js.JsExport
import kotlin.js.JsName
import kotlinx.serialization.Serializable

/**
 * Get page of projects
 * @d2 function
 * @parent [city.smartb.registry.program.f2.project.domain.D2ProjectF2Page]
 * @order 20
 */
typealias ProjectPageFunction = F2Function<ProjectPageQuery, ProjectPageResult>

/**
 * @d2 query
 * @parent [ProjectPageFunction]
 */
@JsExport
@JsName("ProjectPageQueryDTO")
interface ProjectPageQueryDTO {
    val limit: Int?
    val offset: Int?
    val identifier: String?
    val name: String?
    val proponent: String?
    val type: Int?
    val estimatedReductions: String?
    val referenceYear: String?
    val vintage: String?
    val origin: String?
    val dueDate: Long?
    val status: String?
}

/**
 * @d2 inherit
 * @parent [ProjectPageFunction]
 */
data class ProjectPageQuery(
    override val limit: Int? = null,
    override val offset: Int? = null,
    override val identifier: String? = null,
    override val name: String? = null,
    override val proponent: String? = null,
    override val type: Int? = null,
    override val vintage: String? = null,
    override val origin: String? = null,
    override val estimatedReductions: String? = null,
    override val referenceYear: String? = null,
    override val dueDate: Long? = null,
    override val status: String? = null

): ProjectPageQueryDTO

/**
 * @d2 event
 * @parent [ProjectPageFunction]
 */
@JsExport
@JsName("ProjectPageResultDTO")
interface ProjectPageResultDTO: PageQueryResultDTO<ProjectDTO>

/**
 * @d2 inherit
 */
@Serializable
data class ProjectPageResult(
    override val items: List<ProjectDTO>,
    override val total: Int,
    override val pagination: OffsetPaginationDTO
): ProjectPageResultDTO
