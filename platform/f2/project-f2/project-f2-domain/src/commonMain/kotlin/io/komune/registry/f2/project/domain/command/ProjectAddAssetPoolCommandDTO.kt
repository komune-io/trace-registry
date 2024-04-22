package io.komune.registry.f2.project.domain.command

import io.komune.registry.s2.project.domain.command.ProjectAddAssetPoolCommand
import io.komune.registry.s2.project.domain.command.ProjectAddAssetPoolCommandDTO
import io.komune.registry.s2.project.domain.command.ProjectAddedAssetPoolEvent
import io.komune.registry.s2.project.domain.command.ProjectAddedAssetPoolEventDTO
import f2.dsl.fnc.F2Function
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * Update a project
 * @d2 function
 * @parent [io.komune.registry.f2.project.domain.D2ProjectF2Page]
 * @child [io.komune.registry.s2.project.domain.command.ProjectAddAssetPoolCommandDTO]
 * @child [io.komune.registry.s2.project.domain.command.ProjectAddedAssetPoolEventDTO]
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
