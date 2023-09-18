package city.smartb.registry.f2.project.domain.query

import city.smartb.registry.f2.project.domain.model.ProjectDTO
import city.smartb.registry.f2.project.domain.model.ProjectDTOBase
import city.smartb.registry.s2.project.domain.model.ProjectId
import f2.dsl.fnc.F2Function
import kotlin.js.JsExport
import kotlin.js.JsName
import kotlinx.serialization.Serializable

/**
 * Get project by id
 * @d2 function
 * @parent [city.smartb.registry.f2.project.domain.D2ProjectF2Page]
 * @order 10
 */
typealias ProjectGetFunction = F2Function<ProjectGetQuery, ProjectGetResult>

/**
 * @d2 query
 * @parent [ProjectGetFunction]
 */
@JsExport
@JsName("ProjectGetQueryDTO")
interface ProjectGetQueryDTO {
    /**
     * Id of the project to get.
     */
    val id: ProjectId
}

/**
 * @d2 inherit
 */
@Serializable
data class ProjectGetQuery(
    override val id: ProjectId
): ProjectGetQueryDTO

/**
 * @d2 event
 * @parent [ProjectGetFunction]
 */
@JsExport
@JsName("ProjectGetResultDTO")
interface ProjectGetResultDTO {
    /**
     * Project retrieved from the given id, or null if it doesn't exist.
     */
    val item: ProjectDTO?
}

/**
 * @d2 inherit
 */
@Serializable
data class ProjectGetResult(
    override val item: ProjectDTOBase?
): ProjectGetResultDTO
