package io.komune.registry.project.test.bdd.auth

import io.cucumber.java8.En
import io.komune.im.f2.organization.domain.model.Organization
import io.komune.im.f2.organization.domain.model.OrganizationStatus
import io.komune.registry.project.test.bdd.VerCucumberStepsDefinition
import java.util.UUID
import s2.bdd.data.TestContextKey
import s2.bdd.data.parser.extractList

class DefineOrganizationSteps: En, VerCucumberStepsDefinition() {

    init {
        DataTableType(::defineOrganizationParams)

        Given("An organization is defined:") { params: DefineOrganizationParams ->
            step {
                defineOrganization(params)
            }
        }
    }

    private fun defineOrganization(params: DefineOrganizationParams)
        = context.organizations.register(params.identifier) {
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
        DefineOrganizationParams(
            identifier = entry["identifier"] ?: UUID.randomUUID().toString(),
            roles = entry.extractList<String>("roles").orEmpty()
        )

    private data class DefineOrganizationParams(
        val identifier: TestContextKey,
        val roles: List<String>
    )
}
