package city.smartb.registry.program.f2.project.domain.model

import city.smartb.im.commons.model.Address
import city.smartb.im.commons.model.AddressDTO
import city.smartb.registry.program.api.commons.auth.OrganizationId
import kotlin.js.JsExport
import kotlin.js.JsName

@JsExport
@JsName("ProjectProviderDTO")
interface ProjectProviderDTO {
    val id: OrganizationId
    val name: String
    val logo: String?
    val phone: String
    val email: String
    val address: AddressDTO
}

data class ProjectProviderDTOBase(
    override val id: OrganizationId,
    override val name: String,
    override val logo: String?,
    override val phone: String,
    override val email: String,
    override val address: Address
): ProjectProviderDTO
