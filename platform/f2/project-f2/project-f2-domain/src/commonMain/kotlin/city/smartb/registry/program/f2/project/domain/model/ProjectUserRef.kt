package city.smartb.registry.program.f2.project.domain.model

import i2.keycloak.f2.user.domain.model.UserId
import kotlin.js.JsExport

@JsExport
interface ProjectUserRefDTO {
    val id: UserId
    val givenName: String
    val familyName: String
}

data class ProjectUserRef(
    override val id: UserId,
    override val givenName: String,
    override val familyName: String,
): ProjectUserRefDTO
