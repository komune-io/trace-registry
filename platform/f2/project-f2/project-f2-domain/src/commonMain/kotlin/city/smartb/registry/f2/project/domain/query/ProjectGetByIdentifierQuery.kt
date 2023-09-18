package city.smartb.registry.f2.project.domain.query

import city.smartb.registry.f2.project.domain.model.ProjectDTO
import city.smartb.registry.f2.project.domain.model.ProjectDTOBase
import city.smartb.registry.s2.project.domain.model.ProjectIdentifier
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
typealias ProjectGetByIdentifierFunction = F2Function<ProjectGetByIdentifierQuery, ProjectGetByIdentifierResult>

/**
 * @d2 query
 * @parent [ProjectGetFunction]
 */
@JsExport
@JsName("ProjectGetByIdentifierQueryDTO")
interface ProjectGetByIdentifierQueryDTO {
    /**
     * Id of the project to get.
     */
    val identifier: ProjectIdentifier
}

/**
 * @d2 inherit
 */
@Serializable
data class ProjectGetByIdentifierQuery(
    override val identifier: ProjectIdentifier
): ProjectGetByIdentifierQueryDTO

/**
 * @d2 event
 * @parent [ProjectGetFunction]
 */
@JsExport
@JsName("ProjectGetByIdentifierResultDTO")
interface ProjectGetByIdentifierResultDTO {
    /**
     * Project retrieved from the given id, or null if it doesn't exist.
     */
    val item: ProjectDTO?
}

/**
 * @d2 inherit
 */
@Serializable
data class ProjectGetByIdentifierResult(
    override val item: ProjectDTOBase?
): ProjectGetByIdentifierResultDTO
