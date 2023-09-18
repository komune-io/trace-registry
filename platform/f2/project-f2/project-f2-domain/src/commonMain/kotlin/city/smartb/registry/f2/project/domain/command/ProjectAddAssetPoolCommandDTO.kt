package city.smartb.registry.f2.project.domain.command

import city.smartb.registry.s2.project.domain.command.ProjectAddAssetPoolCommand
import city.smartb.registry.s2.project.domain.command.ProjectAddAssetPoolCommandDTO
import city.smartb.registry.s2.project.domain.command.ProjectAddedAssetPoolEvent
import city.smartb.registry.s2.project.domain.command.ProjectAddedAssetPoolEventDTO
import f2.dsl.fnc.F2Function
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * Update a project
 * @d2 function
 * @parent [city.smartb.registry.f2.project.domain.D2ProjectF2Page]
 * @child [city.smartb.registry.s2.project.domain.command.ProjectAddAssetPoolCommandDTO]
 * @child [city.smartb.registry.s2.project.domain.command.ProjectAddedAssetPoolEventDTO]
 * @order 20
 */
typealias ProjectAddAssetPoolFunction = F2Function<ProjectAddAssetPoolCommandDTOBase, ProjectAddedAssetPoolEventDTOBase>

@JsExport
@JsName("ProjectAddAssetPoolCommandDTO")
interface ProjectAddAssetPoolCommandDTO: ProjectAddAssetPoolCommandDTO

/**
 * @d2 inherit
 */
typealias ProjectAddAssetPoolCommandDTOBase = ProjectAddAssetPoolCommand

@JsExport
@JsName("ProjectAddedAssetPoolEventDTO")
interface ProjectAddedAssetPoolEventDTO: ProjectAddedAssetPoolEventDTO

/**
 * @d2 inherit
 */
typealias ProjectAddedAssetPoolEventDTOBase = ProjectAddedAssetPoolEvent
