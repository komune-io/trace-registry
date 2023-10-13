package city.smartb.registry.ver.test.auth

import city.smartb.im.f2.organization.domain.model.Organization
import city.smartb.im.f2.organization.domain.model.OrganizationStatus
import io.cucumber.java8.En
import java.util.UUID
import s2.bdd.data.TestContextKey
import s2.bdd.data.parser.extractList

class DefineOrganizationSteps: En, city.smartb.registry.ver.test.VerCucumberStepsDefinition() {

    init {
        DataTableType(::defineOrganizationParams)

        Given("An organization is defined:") { params: city.smartb.registry.ver.test.auth.DefineOrganizationSteps.DefineOrganizationParams ->
            step {
                defineOrganization(params)
            }
        }
    }

    private fun defineOrganization(params: city.smartb.registry.ver.test.auth.DefineOrganizationSteps.DefineOrganizationParams) = context.organizations.register(params.identifier) {
        Organization(
            id = UUID.randomUUID().toString(),
            siret = null,
            name = params.identifier,
            description = null,
            address = null,
            website = null,
            attributes = emptyMap(),
            roles = params.roles.map(::emptyRole),
            enabled = true,
            disabledBy = null,
            creationDate = System.currentTimeMillis(),
            disabledDate = null,
            logo = null,
            status = OrganizationStatus.VALIDATED.name
        )
    }

    private fun defineOrganizationParams(entry: Map<String, String>) =
        city.smartb.registry.ver.test.auth.DefineOrganizationSteps.DefineOrganizationParams(
            identifier = entry["identifier"] ?: UUID.randomUUID().toString(),
            roles = entry.extractList("roles").orEmpty()
        )

    private data class DefineOrganizationParams(
        val identifier: TestContextKey,
        val roles: List<String>
    )
}
