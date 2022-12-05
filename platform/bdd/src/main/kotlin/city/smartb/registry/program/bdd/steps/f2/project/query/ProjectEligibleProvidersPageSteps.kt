package city.smartb.registry.program.bdd.steps.f2.project.query

import f2.dsl.cqrs.page.PagePagination
import f2.dsl.fnc.invokeWith
import city.smartb.registry.program.bdd.CucumberStepsDefinition
import city.smartb.registry.program.bdd.assertion.AssertionBdd
import city.smartb.registry.program.bdd.assertion.address
import city.smartb.registry.program.bdd.data.TestContextKey
import city.smartb.registry.program.bdd.data.parser.safeExtract
import city.smartb.registry.program.f2.project.api.ProjectEndpoint
import city.smartb.registry.program.f2.project.domain.model.ProjectProviderDTOBase
import city.smartb.registry.program.f2.project.domain.query.ProjectEligibleProvidersListQuery
import io.cucumber.datatable.DataTable
import io.cucumber.java8.En
import org.assertj.core.api.Assertions
import org.springframework.beans.factory.annotation.Autowired

class ProjectEligibleProvidersPageSteps: En, CucumberStepsDefinition() {

    @Autowired
    private lateinit var projectEndpoint: ProjectEndpoint

    private lateinit var providers: Collection<ProjectProviderDTOBase>

    init {
        DataTableType(::projectEligibleProvidersPageParam)
        DataTableType(::projectEligibleProvidersAssertParams)

        When("I fetch the eligible providers of the project via API") {
            step {
                fetchProviders(projectEligibleProvidersPageParam(null))
            }
        }

        When("I fetch the eligible providers of the project via API:") { params: ProjectEligibleProvidersPageParam ->
            step {
                fetchProviders(params)
            }
        }

        Then("I should receive the eligible providers of the project:") { dataTable: DataTable ->
            step {
                dataTable.asList(ProjectEligibleProvidersAssertParams::class.java)
                    .let(::assertProviders)
            }
        }

        Then("I should not receive any eligible providers of the project") {
            step {
                assertProviders(emptyList())
            }
        }
    }

    private suspend fun fetchProviders(params: ProjectEligibleProvidersPageParam) {
        providers = ProjectEligibleProvidersListQuery(
            id = context.projectIds[params.project] ?: params.project,
            providerName = params.providerName,
            postalCode = params.postalCode,
        ).invokeWith(projectEndpoint.projectEligibleProvidersList()).items
    }

    private fun assertProviders(params: Collection<ProjectEligibleProvidersAssertParams>) {
        val paramsMap = params.associateBy { context.organizationIds.safeGet(it.identifier) }

        Assertions.assertThat(providers).hasSameSizeAs(params)
        Assertions.assertThat(providers).allSatisfy { provider ->
            val providerParams = paramsMap[provider.id]
            Assertions.assertThat(providerParams).isNotNull
            providerParams!!.name?.let { Assertions.assertThat(provider.name).isEqualTo(it) }
            providerParams.logo?.let { Assertions.assertThat(provider.logo).isEqualTo(it.parseNullValue()) }
            providerParams.phone?.let { Assertions.assertThat(provider.phone).isEqualTo(it) }
            providerParams.email?.let { Assertions.assertThat(provider.email).isEqualTo(it) }
            providerParams.address?.let { AssertionBdd.address(context).assertThat(provider.address).matches(it) }
        }
    }

    private fun projectEligibleProvidersPageParam(entry: Map<String, String>?) = ProjectEligibleProvidersPageParam(
        project = entry?.get("project") ?: context.projectIds.lastUsedKey,
        providerName = entry?.get("providerName"),
        postalCode = entry?.get("postalCode"),
        page = entry?.get("page")?.toInt() ?: 0,
        size = entry?.get("size")?.toInt() ?: Int.MAX_VALUE,
    )

    private fun projectEligibleProvidersAssertParams(entry: Map<String, String>) = ProjectEligibleProvidersAssertParams(
        identifier = entry.safeExtract("identifier"),
        name = entry["name"],
        logo = entry["logo"],
        phone = entry["phone"],
        email = entry["email"],
        address = entry["address"]
    )

    private data class ProjectEligibleProvidersPageParam(
        val project: TestContextKey,
        val providerName: String?,
        val postalCode: String?,
        val page: Int,
        val size: Int
    )

    private data class ProjectEligibleProvidersAssertParams(
        val identifier: TestContextKey,
        val name: String?,
        val logo: String?,
        val phone: String?,
        val email: String?,
        val address: TestContextKey?
    )
}
