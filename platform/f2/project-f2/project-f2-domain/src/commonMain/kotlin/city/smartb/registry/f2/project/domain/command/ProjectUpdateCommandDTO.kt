package city.smartb.registry.f2.project.domain.command

import city.smartb.registry.s2.project.domain.command.ProjectUpdateCommand
import city.smartb.registry.s2.project.domain.command.ProjectUpdateCommandDTO
import city.smartb.registry.s2.project.domain.command.ProjectUpdatedEvent
import city.smartb.registry.s2.project.domain.command.ProjectUpdatedEventDTO
import f2.dsl.fnc.F2Function
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * Update a project
 * @d2 function
 * @parent [city.smartb.registry.f2.project.domain.D2ProjectF2Page]
 * @child [city.smartb.registry.s2.project.domain.command.ProjectUpdateCommandDTO]
 * @child [city.smartb.registry.s2.project.domain.command.ProjectUpdatedEventDTO]
 * @order 20
 */
typealias ProjectUpdateFunction = F2Function<ProjectUpdateCommandDTOBase, ProjectUpdatedEventDTOBase>

@JsExport
@JsName("ProjectUpdateCommandDTO")
interface ProjectUpdateCommandDTO: ProjectUpdateCommandDTO

/**
 * @d2 inherit
 */
typealias ProjectUpdateCommandDTOBase = ProjectUpdateCommand

@JsExport
@JsName("ProjectUpdatedEventDTO")
interface ProjectUpdatedEventDTO: ProjectUpdatedEventDTO

/**
 * @d2 inherit
 */
typealias ProjectUpdatedEventDTOBase = ProjectUpdatedEvent
