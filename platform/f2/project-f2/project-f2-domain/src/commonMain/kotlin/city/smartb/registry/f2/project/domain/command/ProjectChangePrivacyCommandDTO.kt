package city.smartb.registry.f2.project.domain.command

import city.smartb.registry.s2.project.domain.command.ProjectChangePrivacyCommand
import city.smartb.registry.s2.project.domain.command.ProjectChangePrivacyCommandDTO
import city.smartb.registry.s2.project.domain.command.ProjectChangedPrivacyEvent
import city.smartb.registry.s2.project.domain.command.ProjectChangedPrivacyEventDTO
import f2.dsl.fnc.F2Function
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * Update a project
 * @d2 function
 * @parent [city.smartb.registry.f2.project.domain.D2ProjectF2Page]
 * @child [city.smartb.registry.s2.project.domain.command.ProjectChangePrivacyCommandDTO]
 * @child [city.smartb.registry.s2.project.domain.command.ProjectChangedPrivacyEventDTO]
 * @order 20
 */
typealias ProjectChangePrivacyFunction = F2Function<ProjectChangePrivacyCommandDTOBase, ProjectChangedPrivacyEventDTOBase>

@JsExport
@JsName("ProjectChangePrivacyCommandDTO")
interface ProjectChangePrivacyCommandDTO: ProjectChangePrivacyCommandDTO

/**
 * @d2 inherit
 */
typealias ProjectChangePrivacyCommandDTOBase = ProjectChangePrivacyCommand

@JsExport
@JsName("ProjectChangedPrivacyEventDTO")
interface ProjectChangedPrivacyEventDTO: ProjectChangedPrivacyEventDTO

/**
 * @d2 inherit
 */
typealias ProjectChangedPrivacyEventDTOBase = ProjectChangedPrivacyEvent
