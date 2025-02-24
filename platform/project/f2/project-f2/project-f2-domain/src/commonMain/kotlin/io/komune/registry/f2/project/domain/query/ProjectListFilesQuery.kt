package io.komune.registry.f2.project.domain.query

import f2.dsl.fnc.F2Function
import io.komune.fs.s2.file.domain.model.FilePath
import io.komune.fs.s2.file.domain.model.FilePathDTO
import io.komune.registry.s2.project.domain.model.ProjectId
import kotlin.js.JsExport
import kotlin.js.JsName
import kotlinx.serialization.Serializable


/**
 * List all files of a project.
 * @d2 function
 * @parent [io.komune.registry.f2.project.domain.D2ProjectF2Page]
 * @order 30
 */
typealias ProjectListFilesFunction = F2Function<ProjectListFilesQuery, ProjectListFilesResult>

/**
 * @d2 query
 * @parent [ProjectListFilesFunction]
 */
@JsExport
@JsName("ProjectListFilesQueryDTO")
interface ProjectListFilesQueryDTO {
    /**
     * Id of the project to get.
     */
    val id: ProjectId
}

/**
 * @d2 inherit
 */
@Serializable
data class ProjectListFilesQuery(
    override val id: ProjectId
): ProjectListFilesQueryDTO

/**
 * @d2 event
 * @parent [ProjectListFilesFunction]
 */
@JsExport
@JsName("ProjectListFilesResultDTO")
interface ProjectListFilesResultDTO {
    /**
     * List of paths of all the files uploaded for the project.
     */
    val items: List<FilePathDTO>
}

/**
 * @d2 inherit
 */
@Serializable
data class ProjectListFilesResult(
    override val items: List<FilePath>
): ProjectListFilesResultDTO
