package city.smartb.registry.program.f2.project.domain.model

import city.smartb.registry.program.api.commons.auth.OrganizationId
import kotlin.js.JsExport
import kotlin.js.JsName

@JsExport
@JsName("ProjectOrganizationRefDTO")
interface ProjectOrganizationRefDTO {
    val id: OrganizationId
    val name: String
}

data class ProjectOrganizationRef(
    override val id: OrganizationId,
    override val name: String
): ProjectOrganizationRefDTO
