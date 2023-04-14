package city.smartb.registry.program.f2.project.domain.command

import city.smartb.registry.program.s2.project.domain.command.ProjectCreateCommand
import city.smartb.registry.program.s2.project.domain.command.ProjectCreatedEvent
import f2.dsl.fnc.F2Function
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * Create a project
 * @d2 function
 * @parent [city.smartb.registry.program.f2.project.domain.D2ProjectF2Page]
 * @child [city.smartb.registry.program.s2.project.domain.command.ProjectCreateCommandDTO]
 * @child [city.smartb.registry.program.s2.project.domain.command.ProjectCreatedEventDTO]
 * @order 10
 */
typealias ProjectCreateFunction = F2Function<ProjectCreateCommandDTOBase, ProjectCreatedEventDTOBase>

@JsExport
@JsName("ProjectCreateCommandDTO")
interface ProjectCreateCommandDTO: city.smartb.registry.program.s2.project.domain.command.ProjectCreateCommandDTO

/**
 * @d2 inherit
 */
typealias ProjectCreateCommandDTOBase = ProjectCreateCommand

@JsExport
@JsName("ProjectCreatedEventDTO")
interface ProjectCreatedEventDTO: city.smartb.registry.program.s2.project.domain.command.ProjectCreatedEventDTO

/**
 * @d2 inherit
 */
typealias ProjectCreatedEventDTOBase = ProjectCreatedEvent
