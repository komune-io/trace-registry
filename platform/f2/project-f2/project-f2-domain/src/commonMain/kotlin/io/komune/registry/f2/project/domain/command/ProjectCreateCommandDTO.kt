package io.komune.registry.f2.project.domain.command

import f2.dsl.fnc.F2Function
import io.komune.registry.s2.project.domain.command.ProjectCreateCommand
import io.komune.registry.s2.project.domain.command.ProjectCreateCommandDTO
import io.komune.registry.s2.project.domain.command.ProjectCreatedEvent
import io.komune.registry.s2.project.domain.command.ProjectCreatedEventDTO
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * Create a project
 * @d2 function
 * @parent [io.komune.registry.f2.project.domain.D2ProjectF2Page]
 * @child [io.komune.registry.s2.project.domain.command.ProjectCreateCommandDTO]
 * @child [io.komune.registry.s2.project.domain.command.ProjectCreatedEventDTO]
 * @order 10
 */
typealias ProjectCreateFunction = F2Function<ProjectCreateCommandDTOBase, ProjectCreatedEventDTOBase>

@JsExport
@JsName("ProjectCreateCommandDTO")
interface ProjectCreateCommandDTO: ProjectCreateCommandDTO

/**
 * @d2 inherit
 */
typealias ProjectCreateCommandDTOBase = ProjectCreateCommand

@JsExport
@JsName("ProjectCreatedEventDTO")
interface ProjectCreatedEventDTO: ProjectCreatedEventDTO

/**
 * @d2 inherit
 */
typealias ProjectCreatedEventDTOBase = ProjectCreatedEvent
