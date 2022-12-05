package city.smartb.registry.program.f2.project.domain.query

import f2.dsl.fnc.F2Function
import city.smartb.registry.program.f2.project.domain.model.ProjectDTO
import city.smartb.registry.program.f2.project.domain.model.ProjectDTOBase
import city.smartb.registry.program.s2.project.domain.automate.ProjectId
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * Get a project by id.
 * @d2 function
 */
typealias ProjectGetFunction = F2Function<ProjectGetQuery, ProjectGetResult>

/**
 * @d2 query
 * @parent [ProjectGetFunction]
 */
@JsExport
@JsName("ProjectGetQueryDTO")
interface ProjectGetQueryDTO {
    val id: ProjectId
}

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
    val item: ProjectDTO?
}

data class ProjectGetResult(
    override val item: ProjectDTOBase?
): ProjectGetResultDTO
