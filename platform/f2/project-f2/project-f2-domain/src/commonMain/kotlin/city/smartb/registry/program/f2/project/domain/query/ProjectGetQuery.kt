package city.smartb.registry.program.f2.project.domain.query

import city.smartb.registry.program.s2.project.domain.model.Project
import city.smartb.registry.program.s2.project.domain.model.ProjectDTO
import f2.dsl.fnc.F2Function
import city.smartb.registry.program.s2.project.domain.model.ProjectId
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * Get Project By id
 * @d2 function
 * @parent [city.smartb.registry.program.s2.project.domain.D2ApiSectionModel]
 * @child [ProjectGetQuery]
 * @child [ProjectGetResult]
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

/**
 * @d2 event
 * @parent [ProjectGetFunction]
 */
@JsExport
@JsName("ProjectGetResultDTO")
interface ProjectGetResultDTO {
    val item: ProjectDTO?
}

/**
 * @d2 inherit
 */
data class ProjectGetQuery(
    override val id: ProjectId
): ProjectGetQueryDTO

/**
 * @d2 inherit
 */
data class ProjectGetResult(
    override val item: Project?
): ProjectGetResultDTO
