package io.komune.registry.f2.project.domain.query

import f2.dsl.fnc.F2Function
import io.komune.fs.s2.file.domain.model.FilePath
import io.komune.fs.s2.file.domain.model.FilePathDTO
import io.komune.registry.s2.project.domain.model.ProjectId
import kotlin.js.JsExport
import kotlin.js.JsName
import kotlinx.serialization.Serializable

/**
 * Download a file from a project.
 * @d2 function
 * @parent [io.komune.registry.f2.project.domain.D2ProjectF2Page]
 * @order 40
 */
typealias ProjectDownloadFileFunction = F2Function<ProjectDownloadFileQuery, ProjectDownloadFileResult>

/**
 * @d2 query
 * @parent [ProjectDownloadFileFunction]
 */
@JsExport
@JsName("ProjectDownloadFileQueryDTO")
interface ProjectDownloadFileQueryDTO {
    /**
     * Id of the project to get.
     */
    val id: ProjectId

    /**
     * Path of the file to download.
     */
    val path: FilePathDTO
}

/**
 * @d2 inherit
 */
@Serializable
data class ProjectDownloadFileQuery(
    override val id: ProjectId,
    override val path: FilePath
): ProjectDownloadFileQueryDTO

/**
 * @d2 result
 * @parent [io.komune.registry.f2.project.domain.D2ProjectF2Page]
 */
typealias ProjectDownloadFileResult = ByteArray
