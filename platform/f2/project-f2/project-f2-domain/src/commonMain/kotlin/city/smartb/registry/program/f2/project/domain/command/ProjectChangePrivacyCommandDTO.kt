package city.smartb.registry.program.f2.project.domain.command

import city.smartb.registry.program.s2.project.domain.command.ProjectChangePrivacyCommand
import city.smartb.registry.program.s2.project.domain.command.ProjectChangedPrivacyEvent
import f2.dsl.fnc.F2Function
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * Update a project
 * @d2 function
 * @parent [city.smartb.registry.program.f2.project.domain.D2ProjectF2Page]
 * @child [city.smartb.registry.program.s2.project.domain.command.ProjectChangePrivacyCommandDTO]
 * @child [city.smartb.registry.program.s2.project.domain.command.ProjectChangedPrivacyEventDTO]
 * @order 20
 */
typealias ProjectChangePrivacyFunction = F2Function<ProjectChangePrivacyCommandDTOBase, ProjectChangedPrivacyEventDTOBase>

@JsExport
@JsName("ProjectChangePrivacyCommandDTO")
interface ProjectChangePrivacyCommandDTO: city.smartb.registry.program.s2.project.domain.command.ProjectChangePrivacyCommandDTO

/**
 * @d2 inherit
 */
typealias ProjectChangePrivacyCommandDTOBase = ProjectChangePrivacyCommand

@JsExport
@JsName("ProjectChangedPrivacyEventDTO")
interface ProjectChangedPrivacyEventDTO: city.smartb.registry.program.s2.project.domain.command.ProjectChangedPrivacyEventDTO

/**
 * @d2 inherit
 */
typealias ProjectChangedPrivacyEventDTOBase = ProjectChangedPrivacyEvent
