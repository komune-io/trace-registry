package city.smartb.registry.program.f2.task.domain.model

import i2.keycloak.f2.user.domain.model.UserId
import kotlin.js.JsExport

@JsExport
interface TaskUserRefDTO {
    val id: UserId
    val email: String
    val givenName: String
    val familyName: String
    val memberOf: String
}

data class TaskUserRef (
    override val id: UserId,
    override val givenName: String,
    override val familyName: String,
    override val email: String,
    override val memberOf: String,
): TaskUserRefDTO
