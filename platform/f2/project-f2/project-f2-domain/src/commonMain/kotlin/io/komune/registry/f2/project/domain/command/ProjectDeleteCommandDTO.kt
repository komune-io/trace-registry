package io.komune.registry.f2.project.domain.command

import io.komune.registry.s2.project.domain.command.ProjectDeleteCommand
import io.komune.registry.s2.project.domain.command.ProjectDeleteCommandDTO
import io.komune.registry.s2.project.domain.command.ProjectDeletedEvent
import io.komune.registry.s2.project.domain.command.ProjectDeletedEventDTO
import f2.dsl.fnc.F2Function
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * Delete a project
 * @d2 function
 * @parent [io.komune.registry.f2.project.domain.D2ProjectF2Page]
 * @child [io.komune.registry.s2.project.domain.command.ProjectDeleteCommandDTO]
 * @child [io.komune.registry.s2.project.domain.command.ProjectDeletedEventDTO]
 * @order 30
 */
typealias ProjectDeleteFunction = F2Function<ProjectDeleteCommandDTOBase, ProjectDeletedEventDTOBase>

@JsExport
@JsName("ProjectDeleteCommandDTO")
interface ProjectDeleteCommandDTO: ProjectDeleteCommandDTO

/**
 * @d2 inherit
 */
typealias ProjectDeleteCommandDTOBase = ProjectDeleteCommand

@JsExport
@JsName("ProjectDeletedEventDTO")
interface ProjectDeletedEventDTO: ProjectDeletedEventDTO

/**
 * @d2 inherit
 */
typealias ProjectDeletedEventDTOBase = ProjectDeletedEvent
