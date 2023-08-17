package city.smartb.registry.program.f2.project.domain.command

import city.smartb.registry.program.s2.project.domain.command.ProjectAddAssetPoolCommand
import city.smartb.registry.program.s2.project.domain.command.ProjectAddedAssetPoolEvent
import f2.dsl.fnc.F2Function
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * Update a project
 * @d2 function
 * @parent [city.smartb.registry.program.f2.project.domain.D2ProjectF2Page]
 * @child [city.smartb.registry.program.s2.project.domain.command.ProjectAddAssetPoolCommandDTO]
 * @child [city.smartb.registry.program.s2.project.domain.command.ProjectAddedAssetPoolEventDTO]
 * @order 20
 */
typealias ProjectAddAssetPoolFunction = F2Function<ProjectAddAssetPoolCommandDTOBase, ProjectAddedAssetPoolEventDTOBase>

@JsExport
@JsName("ProjectAddAssetPoolCommandDTO")
interface ProjectAddAssetPoolCommandDTO: city.smartb.registry.program.s2.project.domain.command.ProjectAddAssetPoolCommandDTO

/**
 * @d2 inherit
 */
typealias ProjectAddAssetPoolCommandDTOBase = ProjectAddAssetPoolCommand

@JsExport
@JsName("ProjectAddedAssetPoolEventDTO")
interface ProjectAddedAssetPoolEventDTO: city.smartb.registry.program.s2.project.domain.command.ProjectAddedAssetPoolEventDTO

/**
 * @d2 inherit
 */
typealias ProjectAddedAssetPoolEventDTOBase = ProjectAddedAssetPoolEvent
